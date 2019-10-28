import {
    USER_INFO
} from './mutation-type'
import {
    getLocalStore,
    setLocalStore
} from './../config/global'

export default {
    // 1.同步用户信息
    syncUserInfo({
        commit
    }, userInfo) {
        commit(USER_INFO, userInfo);
        // 把数据保存到本地
        setLocalStore('userInfo', userInfo);
    }
}