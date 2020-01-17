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
                path: '/info/detils_list',
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
                        path: '/home_search',
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
