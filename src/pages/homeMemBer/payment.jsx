import React, { PureComponent } from 'react'
import { notification } from 'antd'
import { Header } from '@@'
import './payment.less'

export default class extends PureComponent {
    //倒计时
    componentDidMount() {
        const fn = () => {
            const time = new Date().getTime()
            const timer = new Date('2020/1/21 21:00:00').getTime()
            const fast = timer - time
            const second = Math.floor((fast / 1000 % 60))
            let s = document.querySelector('.second')
            s.innerHTML = zero(second)
            const minute = Math.floor((fast / 1000 / 60 % 60))
            let m = document.querySelector('.minute')
            m.innerHTML = zero(minute)
        }
        const zero = x => {
            if (x > 10) {
                return x
            } else {
                return `0${x}`
            }
        }
        setInterval(fn, 1000)
    }
    //回到上一级
    back = () => {
        this.props.history.go('-1')
    }
    render() {
        const data = [
            {
                id: 0,
                url: 'http://img5.imgtn.bdimg.com/it/u=3989775766,2505673289&fm=26&gp=0.jpg',
                name: '支付宝',
                type: 'checkbox',
                checked: true
            },
            {
                id: 1,
                url: 'http://img1.imgtn.bdimg.com/it/u=483347436,395576995&fm=26&gp=0.jpg',
                name: '微信',
                type: 'checkbox',
                checked: false
            }
        ]
        const openNotificationWithIcon = type => {
            notification[type]({
                message: '当前环境无法支付，请打开官方APP进行付款',
            })
        }
        return (
            <div className='payment'>
                <Header
                    left={'left'}
                    mid={'在线支付'}
                    right={''}
                    back={this.back}
                />
                <div className='payment-top'>
                    <p>支付剩余时间</p>
                    <p>
                        <span>00</span> : <span className='minute'>00</span> : <span className='second'>00</span>
                    </p>
                </div>
                <p>选择支付方式</p>
                <div className='payment-bot'>
                    {
                        data.map(v => (
                            <dl key={v.id}>
                                <dt>
                                    <img src={v.url} alt="" />
                                    <span>{v.name}</span>
                                </dt>
                                <dd>
                                    <input type={v.type} defaultChecked={v.checked} />
                                </dd>
                            </dl>
                        ))
                    }
                </div>
                <button onClick={() => openNotificationWithIcon('warning')}>确认支付</button>
            </div>
        )
    }
}
