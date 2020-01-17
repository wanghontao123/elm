import React from 'react'
import { withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

/**
 * 统一路由监听
 * 登录后不做任何处理 未登录跳转到登录页
 */
export default @withRouter
class extends React.PureComponent {
  constructor(props) {
    super(props)
    this.redirect(props)
  }

  // nextProps
  componentWillReceiveProps(np) {
    this.redirect(np)
  }

  // 重定向
  redirect = np => {
    const { history } = np

    // 判断是否登录了
    if (!localStorage.getItem('placehHistory')) {
      const pathname = history.location.pathname
      if (!pathname.includes('/info/city') && !pathname.includes('/login')) {
        history.push('/info/city')
      }
    }
  }

  render() {
    const { route } = this.props
    return renderRoutes(route)
  }
}

