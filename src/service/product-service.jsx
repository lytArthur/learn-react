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
    //变更商品上下架状态
    setProductStatus(productInfo) {
        return _mm.request({
            method  : 'POST',
            url     : "/manage/product/set_sale_status.do",
            data    : productInfo
        }); 
    }
}

export default Product;