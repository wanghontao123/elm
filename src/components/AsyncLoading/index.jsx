import React, { PureComponent } from 'react'
import './styles.less';
import { Loading } from '@@'
import { connect } from 'react-redux'
import pig from '@/assets/images/pig.gif'

export default @connect(state => ({
    loading: state.global.loading
}), {})
class extends PureComponent {
    render() {
        const { loading } = this.props
        return (
            <div className='component_AsyncLoading'>
                {
                    loading && <Loading img={pig}/>
                }
            </div>
        )
    }
}