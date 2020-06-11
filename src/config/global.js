/*
 * @Github: https://github.com/Geek-James
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @Date: 2020-05-25 09:57:34
 * @LastEditors: James
 * @LastEditTime: 2020-06-11 09:35:57
 */
// 本地化存储
export const setLocalStore = (name, content) => {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

// 本地化获取
export const getLocalStore = (name) => {
    if (!name) return
    return window.localStorage.getItem(name)
}

// 本地化删除
export const removeLocalStore = (name) => {
    if (!name) return
    return window.localStorage.removeItem(name)
}

// 版本信息
export const _VERSION_ = '1.4.3'