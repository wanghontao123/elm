import React from 'react'
import { Nav } from '@@'
import PrivateRoute from '@@/PrivateRoute'
import './styles.less'

export default class extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 0, icon: 'google', title: '外卖', path: '/' },
                { id: 1, icon: 'coffee', title: '搜索', path: '/home_search' },
                { id: 2, icon: 'ci', title: '订单', path: '/home_order' },
                { id: 3, icon: 'user', title: '我的', path: '/home_my' },
            ]
        }
        if (!localStorage.getItem('id')) {
            this.props.history.push('/info')
        }
    }

    render() {
        return (
            <div className='pages_home'>
                <section>
                    <PrivateRoute route={this.props.route.router} />
                </section>
                <footer>
                    {<Nav data={this.state.data} />}
                </footer>
            </div>
        )
    }
}
