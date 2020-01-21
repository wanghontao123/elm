### Inputs

``` javascript

    state = {
        name: '',   // 姓名
        name_Status: '',   // 姓名状态
    }

     <Inputs
        placeholder='请填写你的姓名'
        onChange={this.onChange}
        name='name'   //
        reg='^[\u4E00-\u9FA5A-Za-z0-9_]{3,}$'
        regtext='请填写您的姓名'
        defaultValue=''
    />

    onChange = items => {
        this.setState({
            [items.name]: items.value,
            [items.name + '_Status']: items.status,
        })
    }

    通过组件里的 status 控制 regtext 显示隐藏
    获取 status {
        false : regtext显示, 所以是报错
        true : regtext隐藏, 所以是对的
    }
   

```