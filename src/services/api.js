export default {
    carousel_list: '/v2/index_entry',
    shop_list: '/shopping/restaurants',
    shop_sort: '/shopping/v2/restaurant/category',
    shop_info: options => `/shopping/restaurant/${options}`,
    shop_food: options => `/shopping/getcategory/${options}`,

    assess_tags: options => `ugc/v2/restaurants/${options}/ratings/tags`,
    assess_scores: options => `ugc/v2/restaurants/${options}/ratings/scores`,

    attr_bute: '/shopping/v1/restaurants/activity_attributes',
    // assess_info: options => `ugc/v2/restaurants/${options}/ratings`,
    food_list: '/shopping/v2/menu',


    login: '/v2/login', //登录
    signout: '/v2/signout', //退出
    captchas: '/v1/captchas', //验证码
    changepassword: '/v2/changepassword', // 修改密码
    homeSearch: 'v4/restaurants',
    search: 'v1/pois',  // 搜索地址
    userInfo: 'v1/user', // 用户信息
}