import ajax from './ajax'

// 1. 定义基础路径
// const BASE_URL = 'http://demo.itlike.com/web/xlmc/api/';
const BASE_URL = 'https://mock.cangdu.org/mock/5d940466d360e8289c6a8eb7/api/'

// const BASE_URL = 'https://easy-mock.com/mock/5d8886c4e956572d197a9105/api/'

// Home页数据
export const getHomeData = () => ajax(BASE_URL + 'homeApi');

// Category 列表页面数据
export const getCategoryData = () => ajax(BASE_URL + 'homeApi/categories');

// Category 右边内容页面数据 需要根据左边点击传值
export const getCategoryDetailData = (params) => ajax(BASE_URL + 'homeApi/categoriesdetail' + params);

// Eat 页面 今日菜单的所有菜单分类
export const getTodayMenuCategoryList = () => ajax(BASE_URL + 'recipe/allScene');

// Eat 页面 菜单菜品
export const getTodayMenuDetail = (params) => ajax(BASE_URL + 'recipe/menulist' + params);