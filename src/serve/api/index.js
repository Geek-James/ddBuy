import ajax from './ajax'

// 1. 定义基础路径
const BASE_URL = 'http://demo.itlike.com/web/xlmc';

// Home页数据
export const getHomeData = () => ajax(BASE_URL + '/api/homeApi');

// Category 列表页面数据
export const getCategoryData = () => ajax(BASE_URL + '/api/homeApi/categories');
// Category 右边内容页面数据
export const getCategoryDetailData = (params) => ajax(BASE_URL + '/api/homeApi/categoriesdetail' + params);