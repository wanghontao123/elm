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
export const Detils_sort = loader(() => import('@/pages/detils_sort')) // 排序列表

export const Home_my = loader(() => import('@/pages/home_my')) // 我的页面
export const Home_Info = loader(() => import('@/pages/homeMyPages/home_info.jsx')) // 我的信息页面
export const Home_Balance = loader(() => import('@/pages/homeMyPages/home_balance.jsx')) // 我的余额页面
export const Home_Point = loader(() => import('@/pages/homeMyPages/home_point.jsx')) // 我的积分页面

export const Home_Shopping = loader(() => import('@/pages/homeMyPages/home_shopping.jsx')) // 积分商城
export const Home_Member = loader(() => import('@/pages/homeMyPages/home_member.jsx')) // 饿了么会员卡
export const Home_Serves = loader(() => import('@/pages/homeMyPages/home_serves.jsx')) // 服务中心
export const Home_Download = loader(() => import('@/pages/homeMyPages/home_download.jsx')) // 下载饿了么APP
export const SetUserName = loader(() => import('@/pages/homeMyPages/setUserName.jsx')) // 修改用户名
export const SetPassWord = loader(() => import('@/pages/homeMyPages/setPassWord.jsx')) // 修改密码
export const Goods_Address = loader(() => import('@/pages/homeMyPages/goods_address.jsx')) // 编辑地址
export const Goods_Address_Add = loader(() => import('@/pages/homeMyPages/goods_address_add.jsx')) // 新增地址
export const Goods_Address_Search = loader(() => import('@/pages/homeMyPages/goods_address_search.jsx')) // 搜索地址

export const InvoiceRecord = loader(() => import('@/pages/homeMemBer/invoiceRecord.jsx')) // 饿了么会员卡 我的优惠
export const Payment = loader(() => import('@/pages/homeMemBer/payment.jsx')) // 饿了么会员卡 在线支付
export const UseCart = loader(() => import('@/pages/homeMemBer/useCart.jsx')) // 饿了么会员卡 兑换会员
export const VipDescription = loader(() => import('@/pages/homeMemBer/vipDescription.jsx')) // 饿了么会员卡 购买记录
export const VipMember = loader(() => import('@/pages/homeMyServerPages'))
