import React, { PureComponent } from 'react'
import { Input, Button } from 'antd'

export default class extends PureComponent {
    render() {
        const { change, btn } = this.props
        return (
            <div className="section-input">
                <Input
                    placeholder="请输入商家或美食名称"
                    onChange={change}
                />
                <Button
                    type="primary"
                    onClick={btn}>
                    提交
                </Button>
            </div>
        )
    }
}

