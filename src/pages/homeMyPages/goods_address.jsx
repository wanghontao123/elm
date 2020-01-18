import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'loadsh'
import axios from 'axios'
import { message } from 'antd'
import { Header_Top, List, } from '@@'
import { addressesList, deleteResses } from '@/services'
import './goods_address.less'

export default 
@connect(state => ({
    loginData: state.login.loginData,
}), {})
class extends Component {

    state = {
        addressList: [],
        status: false,
        text: '编辑'
    }

    componentDidMount() {
        this.addressesList()
    }

    fn = () => {
        const { status } = this.state
        this.setState({
            status: !status
        }, () => {
            const { status } = this.state
            if (status) {
                this.setState({
                    text: '完成',
                })
            } else {
                this.setState({
                    text: '编辑'
                })
            }
        })
    }

    addressesList = () => {
        const user = localStorage.user_id
        addressesList(user)
            .then(res => {
                this.setState({
                    addressList: res
                })
            })
    }

    delete = items => {
        axios.delete(`https://elm.cangdu.org/v1/users/${items.user_id}/addresses/${items.id}`)
            .then(res => {
                if (res.data.success) {
                    message.success(res.data.success)
                } else {
                    message.error('删除失败')
                }
                this.addressesList()
            })
    }

    render() {
        const { status, text } = this.state

        const addressList = _.get(this.state, 'addressList', [])

        return (
            <div className="goods_address">
                <div
                    onClick={() => this.fn()}
                >
                    <Header_Top
                        title="编辑地址"
                        right={text}
                    />
                </div>


                <div className='goods_address_content'>
                    {/* 列表 */}
                    {
                        addressList.map((v, k) => {
                            return (
                                <div
                                    className='goods_address_content_lists'
                                    key={k}
                                >
                                    {
                                        status &&
                                        <p
                                            className='none'
                                            onClick={() => this.delete(v)}
                                        >
                                            <span className='iconfont icon-shanchu'></span>
                                        </p>
                                    }
                                    <p>{v.address}</p>
                                    <p>{v.phone}</p>

                                </div>


                            )
                        })
                    }

                    <List
                        title='新增地址'
                        path='/info/goods_address_add'
                    />
                </div>
            </div>
        );
    }
}

