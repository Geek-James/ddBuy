import ajax from './ajax'

// 1. 定义基础路径
const BASE_URL = 'https://mock.cangdu.org/mock/5d940466d360e8289c6a8eb7/api/'

/*****Home 模块*******/
export const getHomeData = () => ajax(BASE_URL + 'homeApi');
// 特色专区
export const getHomeSpecialZone = () => ajax(BASE_URL + 'homeApi/specialZone');

/***** 分类(Category) 模块 *******/
// Category 列表页面数据
export const getCategoryData = () => ajax(BASE_URL + 'homeApi/categories');

// Category 右边内容页面数据 需要根据左边点击传值
export const getCategoryDetailData = (params) => ajax(BASE_URL + 'homeApi/categoriesdetail' + params);

/***** 吃什么 模块 *******/
// 今日菜单的所有菜单分类
export const getTodayMenuCategoryList = () => ajax(BASE_URL + 'recipe/allScene');
// 菜品菜单
export const getTodayMenuDetail = (params) => ajax(BASE_URL + 'recipe/menulist' + params);

/***** 购物车页面 猜你喜欢*********/
export const getGuessYouLike = () => ajax(BASE_URL + 'cart/youlike');

/***** 登录界面接口 *********/
// 1.获取手机验证码(GET)
// Easy Mock 模拟发送验证码 
export const getPhoneCaptcha = (phoneNumber) => ajax(BASE_URL + 'send_code', {
    phoneNumber
});

// 2.手机验证码登录(POST)
// Easy Mock 模拟用户登录
export const phoneCaptchaLogin = (phone, captcha) => ajax(BASE_URL + 'login_code', {
    phone,
    captcha
}, 'POST');

// 3.账号密码登录(POST)
export const pwdLogin = (userName, pwd, captcha) => ajax(BASE_URL + 'login_pwd', {
    userName,
    pwd,
    captcha
}, 'POST');

/***** 个人中心 *********/
// 1.绿卡Vip
export const getVipContent = () => ajax(BASE_URL + 'vip');