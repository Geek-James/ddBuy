import {
    SELECTED_GOODS_COUNT,
    SELECTED_GOODS
} from "./mutation-type";
import {
    log
} from "util";

export default {
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
    SELECTED_GOODS(state) {
        let goodsArray = [];
        let shopCart = state.shopCart;
        Object.values(shopCart).forEach((good, index) => {
            if (good.checked) {
                goodsArray.push(shopCart[good.id]);
            }
        });
        return goodsArray;
    }
}