import React, { Component } from 'react'
import { Header_Top, List } from '@@'
import { connect } from 'react-redux'
import './style.less'

export default 
@connect(state => ({
    loginData: state.login.loginData,
}), {})
class extends Component {


    // 点击list 列表跳转
    jump = items => {
        this.props.history.push(items.path)
    }
    // 点击 判断是否登录状态
    isLogin = () => {
        const { history } = this.props
        if (localStorage.user_id) {
            history.push('/info/home_info') //我的信息页面
        } else {
            history.push('/login')
        }
        this.props.history.push(items.path)
    }

    render() {
        const { loginData: {
            username,  // 用户名
            mobile,   // 是否绑定手机
            balance, // 我的余额
            gift_amount, // 我的优惠券
            point, // 我的积分
        } } = this.props
        console.log(this.props.loginData, '登录的信息');

        const listData = [
            {
                id: 0,
                title: '我的订单',
                icon: 'iconfont icon-dingdan',
                color: '',
                fontSize: '',
                path: '/home_order'
            },
            {
                id: 1,
                title: '积分商城',
                icon: 'iconfont icon-wodedaipingjia',
                color: 'red',
                fontSize: '',
                path: ''
            },
            {
                id: 2,
                title: '饿了么会员卡',
                icon: 'iconfont icon-huangguan2',
                color: 'yellow',
                fontSize: '',
                path: ''
            },
            {
                id: 3,
                title: '服务中心',
                icon: 'iconfont icon-diannao',
                color: 'blue',
                fontSize: '',
                path: ''
            },
            {
                id: 4,
                title: '下载饿了么App',
                icon: 'iconfont icon-icon-test',
                color: 'blue',
                fontSize: '',
                path: ''
            },
        ]
        // <img src='//elm.cangdu.org/img/default.jpg'/>
        return (
            <div className="home_my">
                <Header_Top
                    title='我的'
                />
                <section>

                    <div className="section_user" onClick={this.isLogin}>
                        <div>
                            {
                                localStorage.user_id ?
                                <img src='//elm.cangdu.org/img/default.jpg'/> :
                                <span className='iconfont icon-wode'></span>
                            }
                        </div>
                        <div>
                            {/* 这是判断有没有登录，登录和不登录显示的不一样 */}
                            <p>{localStorage.user_id ? username : '登录/注册'}</p>
                            <p>
                                <span className='iconfont icon-shouji'></span>
                                {mobile ? mobile : '暂无绑定手机号'}
                            </p>
                        </div>
                        <div>
                            <span className='iconfont icon-you1'></span>
                        </div>
                    </div>
                    <div className="section_mini">
                        <div>
                            <p><span>{balance ? balance.toFixed(2) : '0.00'}</span>元</p>
                            <p>我的余额</p>
                        </div>
                        <div>
                            <p><span>{gift_amount ? gift_amount : 0}</span>个</p>
                            <p>我的优惠</p>
                        </div>
                        <div>
                            <p><span>{point ? point : 0}</span>分</p>
                            <p>我的积分</p>
                        </div>
                    </div>
                    <div className="section_list">
                        {
                            listData.map((v, k) => {
                                return (
                                    <List
                                        key={k}
                                        icon={{
                                            icon: v.icon,
                                            color: v.color,
                                        }}
                                        title={v.title}
                                        onClick={() => this.jump(v)}
                                    />
                                )
                            })
                        }

                    </div>

                    
                </section>
            </div>
        );
    }
}

