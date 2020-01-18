import React, { PureComponent } from 'react'
import { Header } from '@@'
import './vipDescription.less'

export default class extends PureComponent {
    back = () => {
        this.props.history.go('-1')
    }
    render() {
        return (
            <div className='vipdescription'>
                <Header
                    left={'left'}
                    mid={'我的优惠'}
                    right={''}
                    back={this.back}
                />
                <div className='vipdescription-bot'>
                    <div className='show'>
                        <p>
                            尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
                            购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
                            注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
                        </p>
                    </div>
                    <div className='jie'>
                        <h1>Q1: 特权介绍</h1>
                        <ul>
                            <li>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</li>
                            <li>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</li>
                            <li>更多特权，敬请期待！</li>
                        </ul>
                        <h1>Q2: 资费介绍</h1>
                        <ul>
                            <li>饿了么会员卡：20元</li>
                        </ul>
                        <h1>Q3: 使用说明</h1>
                        <ul>
                            <li>当用户满足以下任一条件，会员服务自动失效：</li>
                        </ul>
                        <ol>
                            <li>自绑定之日起超过31天；</li>
                            <li>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</li>
                        </ol>
                        <h1>Q4: 购卡说明</h1>
                        <ul>
                            <li>在线购买：饿了么App>我的>饿了么会员卡</li>
                        </ul>
                        <h1>Q5: 温馨提示</h1>
                        <ul>
                            <li>用户在当前会员服务失效前，无法购买新卡。</li>
                            <li>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
