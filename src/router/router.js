import loader from '@/utils/loader'   // 路由懒加载

export const Layouts_User = loader(() => import('@/layouts/user')) // 用户
export const Layouts_Info = loader(() => import('@/layouts/info')) // 信息
export const Home = loader(() => import('@/pages/home')) // 主 页面
export const Login = loader(() => import('@/pages/login')) //  登录页面
export const Register = loader(() => import('@/pages/register')) // 注册
export const Address = loader(() => import('@/pages/address')) // 地址
export const City = loader(() => import('@/pages/city')) // 地址
export const CitySearch = loader(() => import('@/pages/searchCity')) // 城市搜索
export const Home_order = loader(() => import('@/pages/home_order')) // 订单
export const Home_search = loader(() => import('@/pages/home_search')) // 搜索
export const Home_takeaway = loader(() => import('@/pages/home_takeaway')) // 外卖
export const Detils_list = loader(() => import('@/pages/detils_list')) // 详情列表
export const Detils_info = loader(() => import('@/pages/detils_info')) // 详情信息

export const Home_my = loader(() => import('@/pages/home_my')) // 我的页面
export const Home_Info = loader(() => import('@/pages/homeMyPages/home_info.jsx')) // 我的信息页面
export const Home_Balance = loader(() => import('@/pages/homeMyPages/home_balance.jsx')) // 我的余额页面
