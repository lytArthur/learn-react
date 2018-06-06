import React from 'react'
import MUtil    from 'util/mm.jsx';
const _mm       = new MUtil();

class Product{
    //获取用户列表
    getProductList(pageNum) {
        return _mm.request({
            method  : 'POST',
            url     : '/manage/product/list.do',
            data    : {
                  pageNum: pageNum
            }
        }); 
    }
}

export default Product;