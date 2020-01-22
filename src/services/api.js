export default {
    carousel_list: '/v2/index_entry',
    shop_list: '/shopping/restaurants',
    login: '/v2/login', //登录
    signout: '/v2/signout', //退出
    captchas: '/v1/captchas', //验证码
    changepassword: '/v2/changepassword', // 修改密码
    homeSearch: 'v4/restaurants',
    search: 'v1/pois',  // 搜索地址
    userInfo: 'v1/user', // 用户信息
    hongbaos: opt => `/promotion/v2/users/${opt}/hongbaos`, // 可用红包
    pasthongbaos: opt => `/promotion/v2/users/${opt}/expired_hongbaos`, // 过期红包
    exchangehongbaos: opt => `/v1/users/${opt}/hongbao/exchange`, // 兑换红包

}