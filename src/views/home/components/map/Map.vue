<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2020-01-04 15:36:15
 * @Description: 地图
 * @FilePath: /ddBuy/src/views/home/components/map/Map.vue
 -->
<template>
  <div id="map">
    <van-nav-bar :title="$t('home.chooseAddress')"
                 :border=false
                 :fixed="true"
                 @click-left="onClickLeft"
                 left-arrow
                 style="height:2.5rem" />
    <!-- 地图部分 -->
    <div class="aMap">
      <!-- 搜索框 不是很好用-->
      <!-- <el-amap-search-box class="search-box"
                          :search-option="searchOption"
                          :on-search-result="onSearchResult" /> -->
      <!-- 地图 -->
      <div class="amap-page-container">
        <el-amap ref="map"
                 vid="amapDemo"
                 :plugin="plugin"
                 :zoom="zoom"
                 :center="center"
                 class="amap-map"
                 :events="events"
                 v-show="showMap">
          <el-amap-marker vid="component-marker"
                          :position="makerConf.position"
                          :content="makerConf.content" />
        </el-amap>
      </div>
      <!-- 地址列表 -->
      <div class="adrs">
        <ul v-if="list.length > 0">
          <van-cell-group :title="$t('home.currentLocation')">
            <van-cell>
              <!-- 使用 title 插槽来自定义标题 -->
              <template slot="title">
                <span class="custom-title">
                  <p class="title">{{list[0].name}}</p>
                  <p class="subTitle">{{list[0].address}}</p>
                </span>
              </template>
            </van-cell>
          </van-cell-group>
          <!-- 附近位置 -->
          <van-cell-group :title="$t('home.nearbyAddress')">
            <ul>
              <li class="nearLists"
                  v-for="(item,index) in list"
                  :key="index"
                  @click="clickAddredd(item)">
                <p class="
                  title">{{item.name}}</p>
                <p class="subTitle">{{item.address}}</p>
              </li>
            </ul>
          </van-cell-group>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import VueAMap from 'vue-amap'
import Vue from 'vue'
import PubSub from 'pubsub-js'
import { LOCATION_ADDRESS } from '../../../../config/pubsub_type'
import { setLocalStore } from '../../../../config/global'
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  // 申请的高德key
  key: 'cde7aa4cab0681d34ddb6916431125b2',
  // 插件集合所有的
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch',
    'AMap.Scale', 'AMap.OverView',
    'AMap.ToolBar', 'AMap.MapType',
    'AMap.PolyEditor', 'AMap.CircleEditor',
    'AMap.Geolocation'],
  uiVersion: '1.0',
  v: '1.4.4'
});
export default {
  created () {
  },
  mounted () {
  },
  components: {},
  data () {
    var me = this;
    me.city = me.city || '苏州';
    return {
      showMap: true,
      list: [],
      currentLocation: [],
      currIndex: 0,
      zoom: 16,
      center: [114.397169, 30.50576],
      events: {
        init: (o) => {
          o.setCity(me.city, result => {
            me.center = result;
            if (result && result.length > 0) {
              me.zoom = 16;
              me.makerConf.position = result;
              me.getList(result);
            }
          });
          // Map UI优化
          this.$nextTick(() => {
            //去掉logo
            document.getElementsByClassName("amap-logo")[0].style.display = "none";
            // 去掉版权信息
            document.getElementsByClassName('amap-copyright')[0].style.opacity = "0";
            // 修改搜索结果框的宽度
            // document.getElementsByClassName('search-tips')[0].style.width = '60%';
            // 隐藏比例尺
            document.getElementsByClassName('amap-scalecontrol')[0].style.visibility = "hidden";
            // 修改定位当前位置
            document.getElementsByClassName('amap-geolocation-con')[0].style.left = "85%";
          })
        },
        // 拖拽 
        "dragend": function (e) {
          var point = this.getCenter();
          var pos = [point.lng, point.lat];
          me.makerConf.position = [point.lng, point.lat];
          me.getList(pos);
        },
      },
      makerConf: {
        position: [114.397169, 30.50576],
        content: ""
      },
      searchOption: {
        city: me.city,
        citylimit: true
      },
      plugin: [
        'Scale',
        {
          pName: 'Geolocation',
          events: {
            init (o) {
              // 获取当前位置
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  me.$nextTick();
                }
              });
            },
            complete: function (result) {
              //定位成功
              var address = result.formattedAddress
              var point = result.position;
              var obj = {
                address: address,
                name: "",
                location: point
              }
              me.makerConf.position = [point.lng, point.lat];
              me.getList([point.lng, point.lat]);
            },
            error: function () {
            }
          }
        }
      ]
    };
  },
  methods: {
    // 获取位置列表
    getList: function (result) {
      //获取列表
      var me = this;
      me.$Geocoder({
        lnglatXY: result,
        success: function (res) {
          if (res.regeocode && res.regeocode.pois) {
            me.list = res.regeocode.pois;
          } else {
            me.list = [];
          }
        },
        error: function (res) {
          me.list = [];
        }
      });
    },
    // 搜索结果
    onSearchResult (pois) {
      let latSum = 0;
      let lngSum = 0;
      var me = this;
      var mymap = me.$refs.map.$$getInstance();
      if (pois && pois.length > 0) {
        //如果长度为1则无需转化
        var poi = pois[0];
        var lng = poi["lng"];
        var lat = poi["lat"];
        me.center = [lng, lat];
        me.makerConf.position = [lng, lat];
        me.makerConf.content = poi.name;
        me.list = pois;
      } else {
        me.list = [];
      }
    },
    //将坐标点转化为，详细地址
    $Geocoder (options) {
      options = options || {};
      if (AMap) {
        AMap.plugin(['AMap.Geocoder'], () => {
          const geocoder = new AMap.Geocoder({
            radius: options.radius || 1000,
            extensions: options.extensions || "all"
          })
          var lnglatXY = options.lnglatXY || [114.397169, 30.50576]; //已知点坐标
          geocoder.getAddress(lnglatXY, function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              options.success && options.success(result);
            } else {
              options.error && options.error(status, result);
            }
          });
        });
      }
    },
    onClickLeft () {
      this.$router.back();
    },
    clickAddredd (item) {
      // 发通知给Header组件修改名称      
      PubSub.publish(LOCATION_ADDRESS, item.name);
      // 存储到本地
      setLocalStore('userLocation', item.name);
      this.$router.back();
    }
  },
  watch: {
    list: function () {
      this.currIndex = 0;
    }
  }
};
</script>
<style lang="less" scoped>
#map {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background-color: #f5f5f5;
  .adrs {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: calc(100vh);
    .title {
      color: black;
      font-size: 0.8rem;
    }
    .subTitle {
      color: grey;
      font-size: 0.6rem;
    }
  }
  .search-box {
    top: 2.7rem;
    width: 100%;
    font-size: 0.8rem;
    color: #3bba63;
  }
  .nearLists {
    padding-top: 1rem;
    padding-left: 1rem;
    height: 2.5rem;
    line-height: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-bottom: 0.1px solid #dedede;
  }
  .amap-page-container {
    margin-top: 3rem;
    height: 10rem;
  }
  .amap-map {
    height: 10rem;
  }
  .amap-geolocation-con {
    bottom: 2rem !important;
    z-index: 100 !important;
  }
  ul li.active {
    color: deeppink;
  }
}
</style>