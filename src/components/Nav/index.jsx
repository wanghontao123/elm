import React, { PureComponent } from 'react'
import { Link, withRouter } from 'react-router-dom'
import cs from 'classnames'
import './styles.less'
import { Icon } from 'antd'

export default @withRouter
class extends PureComponent {
    render() {
        const { data } = this.props
        const url = this.props.location.pathname == '/' ? '/' : `/${this.props.location.pathname.split('/')[1]}`
        
        return (
            <div className='components_nav'>
                {
                    data.map((v, k) => {
                        return (
                            <Link
                                to={v.path}
                                key={k}
                                className={cs({ 'aStyle': url === v.path })}
                            >
                                {
                                    v.icon && <p><Icon type={v.icon} /></p>
                                }
                                <p>{v.title}</p>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}