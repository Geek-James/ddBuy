// 引入mutation-type
import {
    ADD_GOODS,
    INIT_SHOP_CART,
    REDUCE_GOODS
} from './mutation-type'

// 引入本地存储
import {
    getLocalStore,
    setLocalStore
} from '../config/global'
import {
    log
} from 'util';

export default {
    // 1.添加商品
    [ADD_GOODS](state, {
        goodsID,
        goodsName,
        smallImage,
        goodsPrice
    }) {
        let shopCart = state.shopCart;
        // 1.1 判断商品是否存在
        if (shopCart[goodsID]) {
            // 让数量goodsID里面的num +1
            shopCart[goodsID]['num']++;

        } else {
            // 1.2 不存在则设置默认值
            shopCart[goodsID] = {
                'num': 1,
                'id': goodsID,
                'name': goodsName,
                'price': goodsPrice,
                'smallImage': smallImage,
                'checked': true
            }
            // 1.3 给shopCart产生新对象
            state.shopCart = {
                ...shopCart
            };
            // 1.4 将数据存储到本地
            setLocalStore('shopCart', state.shopCart);
        }
    },
    // 2.页面初始化,获取本地购物车的数据
    [INIT_SHOP_CART](state) {
        // 2.1 先存本地取购物车数据
        let initShopCart = getLocalStore('shopCart');
        if (initShopCart) {
            // 2.1 如何购物车有数据那么就把它通过对象的方式赋值给store
            state.shopCart = JSON.parse(initShopCart);
        }
    },
    // 3.减少商品
    [REDUCE_GOODS](state, {
        goodsID
    }) {
        // 3.1 先取出商品
        let shopCart = state.shopCart;
        // 3.2 通过商品ID来找到这个商品
        let goods = shopCart[goodsID];
        if (goods) {
            // 3.3 找到该商品做处理
            if (goods['num'] > 0) {
                // 3.4 减少商品数量
                goods['num']--;
            }
            // 3.4 如果num的数量为0,那么就移除
            if (goods['num'] === 0) {
                delete shopCart[goodsID];
            }
            // 3.5 同步state中的数据
            state.shopCart = {
                ...shopCart
            };
            // 3.6 同步本地数据
            setLocalStore('shopCart', state.shopCart);
        }
    }
}