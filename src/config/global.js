/*
  本地化存储
*/
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
};

/*
  本地化获取
*/
export const getStore = (name) => {
    if (!name) return;
    return window.localStorage.getItem(name);
};