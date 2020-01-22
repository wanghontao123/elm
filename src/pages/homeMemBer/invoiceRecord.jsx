import React, { PureComponent } from 'react'
import { Result, Icon } from 'antd'
import { Header } from '@@'
import './invoiceRecord.less'

export default class extends PureComponent {
    //回到上一级
    back = () => {
        this.props.history.go('-1')
    }
    render() {
        return (
            <div className='invoiceRecord'>
                <Header
                    left={'left'}
                    mid={'购买记录'}
                    right={''}
                    back={this.back}
                />
                <Result
                    icon={<Icon type="smile" theme="twoTone" />}
                    title="没有购买记录"
                />
            </div>
        )
    }
}
