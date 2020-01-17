import React, { PureComponent } from 'react'
import SearchHistory from '@@/SearchHistory'

export default class extends PureComponent {
    render() {
        const { sera, clear, click, clearText } = this.props
        return (
            <>
                {
                    sera ?
                        <div className='history'>
                            <p>搜索历史</p>
                            <div className='text'>
                                {
                                    sera.length > 0 && sera.map((v, k) => (
                                        <SearchHistory
                                            v={v}
                                            key={k}
                                            click={click}
                                        />
                                    ))
                                }
                            </div>
                            <div className='clear' onClick={clear}>{clearText}</div>
                        </div> : ''
                }
            </>
        )
    }
}

