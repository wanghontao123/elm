import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PrivateRoute from '@@/PrivateRoute'

import {
    Home,
    Login,
    Register,
    Layouts_User,
    Layouts_Info,
    Address,
    City,
    Home_my,
    Home_order,
    Home_search,
    Home_takeaway,
    Detils_list,
    Detils_info,
    CitySearch,
    Home_Info, // 我的信息页面
    Home_Balance, // 我的余额 页面
    Home_Point, // 我的积分 页面
    Home_Shopping, // 积分商城
    Home_Member, // 饿了么会员卡
    Home_Serves, // 服务中心
    Home_Download, // 下载饿了么APP
    SetUserName, // 修改用户名
    SetPassWord, // 修改密码
    Goods_Address, // 编辑地址
    InvoiceRecord,
    Payment,
    UseCart,
    VipDescription,
    Goods_Address_Add, // 新增地址
    Goods_Address_Search, // 搜索地址
    Home_Discount_Coupon, // 优惠券
    Home_Hb_Past,  // 过期红包

} from './router' // 引入页面


const route = [
    {
        path: '/info',
        component: Layouts_Info,
        router: [

            {
                path: '/info/city',
                component: City,
            },
            {
                path: '/info/citySearch/:id',
                component: CitySearch,
            },
            {
                path: '/info/detils_list/:id',
                component: Detils_list,
            },
            {
                path: '/info/detils_info',
                component: Detils_info,
            },
            {
                // 我的信息页面
                path: '/info/home_info',
                component: Home_Info,
            },
            {
                // 我的余额页面
                path: '/info/home_balance',
                component: Home_Balance,
            },
            {
                // 我的积分页面
                path: '/info/home_point',
                component: Home_Point,
            },
            {
                // 积分商城
                path: '/info/home_shopping',
                component: Home_Shopping,
            },
            {
                // 饿了么会员卡
                path: '/info/home_member',
                component: Home_Member,
            },
            {
                path: '/info/invoiceRecord',
                component: InvoiceRecord,
            },
            {
                path: '/info/payment',
                component: Payment,
            },
            {
                path: '/info/useCart',
                component: UseCart,
            },
            {
                path: '/info/vipDescription',
                component: VipDescription,
            },
            {
                // 服务中心
                path: '/info/home_serves',
                component: Home_Serves,
            },
            {
                // 下载饿了么APP
                path: '/info/home_download',
                component: Home_Download,
            },
            {
                // 修改用户名
                path: '/info/setusername',
                component: SetUserName,
            },
            {
                // 修改用户名
                path: '/info/setpassword',
                component: SetPassWord,
            },
            {
                // 编辑地址
                path: '/info/goods_address',
                component: Goods_Address,
            },
            {
                // 新增地址
                path: '/info/goods_address_add',
                component: Goods_Address_Add,
            },
            {
                // 新增地址
                path: '/info/goods_address_search',
                component: Goods_Address_Search,
            },
            {
                // 优惠券
                path: '/info/home_discount_coupon',
                component: Home_Discount_Coupon,
            },
            {
                // 过期红包
                path: '/info/home_hb_past',
                component: Home_Hb_Past,
            },
            {
                path: '/info',
                component: Address,
            },
        ]
    },
    {
        path: '/',
        component: Layouts_User,
        router: [
            {
                path: '/login',
                component: Login,
            },
            {
                path: '/register',
                component: Register,
            },
            {
                path: '/',
                component: Home,
                router: [
                    {
                        path: '/home_search/:geohash',
                        component: Home_search,
                    },
                    {
                        path: '/home_order',
                        component: Home_order,
                    },
                    {
                        path: '/home_my',
                        component: Home_my,
                    },
                    {
                        path: '/',
                        component: Home_takeaway,
                    }
                ]
            }
        ]
    }

]



export default class extends React.PureComponent {
    render() {
        return (
            <BrowserRouter >
                <PrivateRoute route={route} />
            </BrowserRouter>
        )
    }
}
