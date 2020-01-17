import React, { PureComponent } from 'react'
import SearchHistory from '@@/SearchHistory'

export default class extends PureComponent {
    render() {
        const { seachData, click } = this.props
        return (
            <>
                {
                    seachData.length > 0 ?
                        <div className='search'>
                            {
                                seachData.length > 0 && seachData.map((v, k) => (
                                    <SearchHistory
                                        v={v}
                                        key={k}
                                        click={click}
                                    />
                                ))
                            }
                        </div> : ''
                }
            </>
        )
    }
}
