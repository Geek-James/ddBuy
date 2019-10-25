import ajax from './ajax'

// 1. 定义基础路径
// const BASE_URL = 'http://demo.itlike.com/web/xlmc/api/';
const LOCAL_URL = 'http://demo.itlike.com/web/xlmc/api/';
const BASE_URL = 'https://mock.cangdu.org/mock/5d940466d360e8289c6a8eb7/api/'

// const BASE_URL = 'https://easy-mock.com/mock/5d8886c4e956572d197a9105/api/'

/*****Home 模块*******/
export const getHomeData = () => ajax(BASE_URL + 'homeApi');

/*****分类(Category) 模块 START*******/
// Category 列表页面数据
export const getCategoryData = () => ajax(BASE_URL + 'homeApi/categories');

// Category 右边内容页面数据 需要根据左边点击传值
export const getCategoryDetailData = (params) => ajax(BASE_URL + 'homeApi/categoriesdetail' + params);

/*****吃什么 模块 START*******/
// 今日菜单的所有菜单分类
export const getTodayMenuCategoryList = () => ajax(BASE_URL + 'recipe/allScene');
// 菜品菜单
export const getTodayMenuDetail = (params) => ajax(BASE_URL + 'recipe/menulist' + params);

/*****购物车页面 猜你喜欢 START*********/
export const getGuessYouLike = () => ajax(BASE_URL + 'cart/youlike');

/*****登录界面接口*********/
// 1.获取手机验证码(GET)
export const getPhoneCaptcha = (phoneNumber) => ajax(LOCAL_URL + 'send_code', {
    phoneNumber
});
// 2.手机验证码登录(POST)
export const phoneCaptchaLogin = (phone, captcha) => ajax(LOCAL_URL + 'login_code', {
    phone,
    captcha
}, 'POST');
// 3.账号密码登录(POST)
export const pwdLogin = (userName, pwd, captcha) => ajax(LOCAL_URL + 'login_pwd', {
    userName,
    pwd,
    captcha
}, 'POST');