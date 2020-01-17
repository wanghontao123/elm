import React, { PureComponent } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Icon } from 'antd'
import './styles.less'

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
                            <NavLink
                                to={v.path}
                                key={k}
                                activeClassName='aStyle'
                                exact
                            >
                                {
                                    v.icon && <p><Icon type={v.icon} /></p>
                                }
                                <p>{v.title}</p>
                            </NavLink>
                        )
                    })
                }
            </div>
        )
    }
}