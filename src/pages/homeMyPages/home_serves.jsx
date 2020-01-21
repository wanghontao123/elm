import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header_Top, } from '@@'
import './home_serves.less'
import { Icon } from 'antd'
import List from '@@/List'
import HomeMyServerPages from '@/pages/homeMyServerPages'

export default 
@connect(state => ({
    loginData: state.login.loginData,
}), {})
class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    path: '/info/home_serves/questionDetail',
                    title: '超级会员权益说明'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '签到规则'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '用户等级说明'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '积分问题'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '教我拍大片'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '支付问题'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '其它问题'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '准时达问题'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '会员说明'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '会员问题'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '红包问题'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '活动细则'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '补签规则'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '优惠说明'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '免责声明'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '代金卷说明'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '商务合作'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '余额问题'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '超赞商家'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '匿名购买'
                },
                {
                    path: '/info/home_serves/questionDetail',
                    title: '活动问题'
                }
            ]
        }
    }
    


    render() {
        const { loginData: {
            username,  // 用户名
        } } = this.props
        const { list } = this.state
        return (
            <div className="home_serves">
               <Header_Top   title="服务中心" />
               <div className="section">
                   
                   <div className="sect-service">
                       <dl>
                           <dt>
                                <Icon 
                                    type="customer-service"     theme="filled" 
                                />
                           </dt>
                           <dd>在线客服</dd>
                       </dl>
                       <dl>
                           <dt>
                               <Icon type="phone" theme="twoTone" />
                            </dt>
                           <dd>在线客服</dd>
                       </dl>
                   </div>
                   <div className="sect-title">
                       <p>热门问题</p>
                        {
                            list.map((v, k) => (
                                <List  title={v.title} path={v.path}/>
                            ))
                        }
                   </div>
               </div>
                
            </div>
        );
    }
}

