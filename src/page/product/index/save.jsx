

import   React              from 'react';
import   {  Link }          from 'react-router-dom';
import PageTitle            from 'component/page-title/index.jsx';
import CategorySelector     from 'page/product/index/category-select.jsx';
import MUtil          from 'util/mm.jsx';
import Product        from 'service/product-service.jsx';

const _mm = new MUtil();
const _product = new Product();

class ProductSave extends React.Component{
  constructor(props){
    super(props);   
  }
  render(){
    return (
        <div id="page-wrapper">
              <PageTitle title="添加商品" />
              <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-md-2 control-label">商品名称</label>
                        <div className="col-md-5">
                        <input type="text" className="form-control" placeholder="请输入商品名称" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">所属分类</label>
                        <CategorySelector />
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">商品价格</label>
                        <div className="col-md-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="价格"/>
                                    <span className="input-group-addon" id="basic-addon2">元</span>
                                </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-md-2 control-label">商品库存</label>
                        <div className="col-md-3">
                            <div className="input-group">
                                    <input type="text" className="form-control" placeholder="库存" />
                                    <span className="input-group-addon" id="basic-addon2">件</span>
                           </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-md-2 control-label">商品图片</label>
                        <div className="col-md-10">
                              xxxx
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-md-2 control-label">商品详情</label>
                        <div className="col-md-10">
                              detail
                        </div>
                    </div> 
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary">提交</button>
                            </div>
                        </div>
                    </div>
        </div>
    )
  }
}


export default ProductSave