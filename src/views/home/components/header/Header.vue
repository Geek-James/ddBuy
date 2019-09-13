<template>
  <div class="wrapper">
    <div class="locationWrapper">
      <svg viewBox="0 0 30 30"
           class="icon iconLocation">
        <path fill="#FFFFFF"
              fill-rule="evenodd"
              d="M14.521 30.445c.817.738 2.142.75 2.958 0 0 0 11.521-9.82 11.521-17.158C29 5.95 23.18 0 16 0S3 5.949 3 13.287c0 7.339 11.521 17.158 11.521 17.158zM16 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
      </svg>
      <span class="address">{{"圆融时代广场(久光百货)负一楼"}}</span>
      <svg viewBox="0 0 30 30"
           class="icon iconArrow">
        <path fill="#FFFFFF"
              fill-rule="evenodd"
              d="M14.724 19.17c.783.784 2.05.788 2.837 0l5.047-5.047c1.173-1.172.776-2.123-.869-2.123H10.545c-1.652 0-2.04.952-.869 2.123l5.048 5.048z"></path>
      </svg>

    </div>
    <div class="searchWrapper">
      <div class="searchContent">
        <div class="iconSearchWrapper">
          <svg viewBox="0 0 32 32"
               class="icon iconSearch">
            <path fill="#999"
                  fill-rule="evenodd"
                  d="M23.624 21.503c3.47-4.51 3.14-11.003-.992-15.135-4.491-4.49-11.773-4.49-16.264 0-4.49 4.491-4.49 11.773 0 16.264 4.132 4.131 10.625 4.462 15.135.992l4.66 4.66a1.5 1.5 0 1 0 2.121-2.121l-4.66-4.66zm-3.114-.993A8.5 8.5 0 1 0 8.49 8.49a8.5 8.5 0 0 0 12.02 12.02z"></path>
          </svg>
        </div>
        <span class="searchPrompt">输入商品名称</span>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {

}
</script>

<style lang="less" scoped>
.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  height: 3.125rem;
  line-height: 3.125rem;
  width: 100%;
  box-sizing: border-box;
  border-top: solid 1px #eeeeee;
  color: white;
  display: flex;
}

.iconLocation {
  position: absolute;
  left: 0.3rem;
  top: 1.0625rem;
  width: 1.875rem;
  height: 1rem;
  vertical-align: middle;
}

// 地址框
.locationWrapper {
  margin-top: 0.6rem;
  height: 1.875rem;
  line-height: 1.875rem;
  max-width: 55%;
  white-space: nowrap;
  opacity: 0.6;
  min-width: 23%;
  background-color: black;
  border-radius: 3.125rem;
  flex: 0, 0, 20rem;
}

.locationWrapper .address {
  padding-left: 1.7rem;
  display: inline-block;
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  //   width: 70%;
  max-width: 70%;
  min-width: 20%;
  vertical-align: middle;
}

.locationWrapper .iconArrow {
  vertical-align: middle;
}

.locationWrapper.wheel {
  opacity: 0;
  -webkit-transition: opacity 1.2s;
  transition: opacity 1.2s;
}

// 搜索框
.searchWrapper {
  flex: 1;
  top: 0.625rem;
  height: 3.125rem;
  line-height: 3.125rem;
}

.searchWrapper.wheel {
  width: 96%;
  -webkit-transition: width 1s ease 0.2s;
  transition: width 1s ease 0.2s;
}

.searchContent {
  margin-top: 0.625rem;
  flex: 1;
  margin-right: 2%;
  margin-left: 2%;
  border-radius: 3.125rem;
  height: 1.875rem;
  line-height: 1.875rem;
  text-align: center;
  background: #f2f2f2;
  vertical-align: middle;
}

.iconSearchWrapper {
  display: inline-block;
  width: 1.25rem;
  height: 100%;
  vertical-align: middle;
}

.iconSearch {
  margin-top: 0.3125rem;
  width: 1.25rem;
  height: 1.25rem;
}

.searchPrompt {
  display: inline-block;
  vertical-align: top;
  margin-left: 0.25rem;
  text-align: center;
  font-size: 0.875rem;
  color: #999999;
}

@media (min-width: 320px) {
  .searchWrapper {
    width: 55%;
  }
}

@media (min-width: 375px) {
  .searchWrapper {
    width: 57%;
  }
}

@media (min-width: 414px) {
  .searchWrapper {
    width: 62%;
  }
}

.icon {
  fill: #999;
  width: 1rem;
  height: 1rem;
}
</style>