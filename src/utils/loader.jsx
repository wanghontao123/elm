import React from 'react'
import Loadable from 'react-loadable';
import { Loading } from '@@'
import pig from '@/assets/images/pig.gif'
 
const Loadingx = () => <div className='component_Loading'> <Loading img={pig}/> </div> // 加载中...

export default (loader, loading = Loadingx) => {	
    return Loadable({
        loader: loader,
        loading,
    });
}