import {
    SELECTED_GOODS_COUNT,
    SELECTED_GOODS,
    SELECTED_GOODS_PRICE,
    USER_SEX
} from "./mutation-type";

// 引入本地存储
import {
    getLocalStore,
    setLocalStore,
    removeLocalStore
} from '../config/global'

export default {
    // 1. 选中商品的数量
    SELECTED_GOODS_COUNT(state) {
        // 3.1 取出state中的商品数据
        let count = 0;
        let shopCart = state.shopCart;
        Object.values(shopCart).forEach((goods, index) => {
            if (goods.checked) {
                // 6.2删除选中商品
                count++;
            }
        });
        return count;
    },
    // 2.选中的商品
    SELECTED_GOODS(state) {
        let goodsArray = [];
        // 从本地取出数据
        let shopCart = state.shopCart;
        // let shopCart = JSON.parse(getLocalStore('shopCart'));
        Object.values(shopCart).forEach((good, index) => {
            if (good.checked) {
                goodsArray.push(shopCart[good.id]);
            }
        });
        return goodsArray;
    },
    // 3.选中商品的价格
    SELECTED_GOODS_PRICE(state) {
        let totalPrice = 0;
        // 3.1 取到shopCart里面的数据遍历找到选中的goods计算总价
        Object.values(state.shopCart).forEach((goods, index) => {
            if (goods.checked) {
                // 3.2 计算总价,由于Vant的SubmitBar组件接受的价格格式是保留两位小数且中间不需要.所以需要转换下
                totalPrice += (goods.price * goods.num * 100)
            }
        });
        return totalPrice;
    },
    // 性别
    [USER_SEX](state) {
        if (state.userInfo.sex == '1') {
            return '美女'
        } else if (state.userInfo.sex == '2') {
            return '帅哥';
        } else {
            return '未填写'
        }
    }
}