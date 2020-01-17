import React, { PureComponent } from 'react'
import { Input, Button } from 'antd'

export default class extends PureComponent {
    render() {
        const { change, btn, placeholder } = this.props
        return (
            <div className="section-input">
                <Input
                    placeholder={placeholder}
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

