

import   React               from 'react';
import   {  Link }           from 'react-router-dom';
import PageTitle             from 'component/page-title/index.jsx';
import CategorySelector      from 'page/product/index/category-select.jsx';
import MUtil                 from 'util/mm.jsx';
import Product               from 'service/product-service.jsx';
import FileUploader          from 'util/fileupload/index.jsx';
import Editor                from 'util/editor/index.jsx';
import './save.scss';

const _mm = new MUtil();
const _product = new Product();

class ProductSave extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        name             : '',
        subtitle         : '',
        price            : '',
        stock            : '',
        detail           : '',
        status           : '1',
        categoryId       : 0,
        parentCategoryId : 0,
        subImages        : []
    }
    console.log(this.state.subImages);
  }
  //品类选择变化
  onCategoryChange(categoryId, parentCategoryId){
      console.log(categoryId,parentCategoryId);
  }
  onUploadSuccess(res){
      let subImages = this.state.subImages;
      subImages.push(res);
      console.log(subImages);
      this.setState({
          subImages : subImages
      })
  }
  onUploadError(errMsg) {
      _mm.errorTips(errMsg);
  }
  //删除图片
  onImagesDelete(e) {
      let index     = parseInt(e.target.getAttribute("index"));
      let subImages = this.state.subImages;
      subImages.splice(index, 1);
      this.setState({
        subImages : subImages
      });
  }
  onEditorChange(value) {
      console.log(value);
      this.setState({
          detail: value
      });
  }
  onValueChange(e) {
      let name = e.target.name,
          value = e.target.value;
      this.setState({
          [name] : value
      });
  }
  dealSubImage() {
      return this.state.subImages.map((v, i) => v.uri).join(",");
  }
  onSubimt() {
    let product = {
        categoryId          : this.state.secondCategoryId || this.state.firstCategoryId || 0,
        name                : this.state.name,
        subtitle            : this.state.subtitle,
        subImages           : this.dealSubImage(),
        detail              : this.state.detail,
        price               : this.state.price,
        stock               : this.state.stock,
        status              : this.state.status || 1 // 状态为正常
    }
    console.log(product);
  }
  render(){
    return (
        <div id="page-wrapper">
              <PageTitle title="添加商品" />
              <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-md-2 control-label">商品名称</label>
                        <div className="col-md-5">
                        <input type="text" className="form-control"
                         placeholder="请输入商品名称"
                         name="name"
                         onChange = {(e) => {this.onValueChange(e)}}
                          />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">商品描述</label>
                        <div className="col-md-5">
                        <input type="text" className="form-control"
                         placeholder="请输入商品描述"
                         name="subtitle"
                         onChange = {(e) => {this.onValueChange(e)}}
                          />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">所属分类</label>
                        <CategorySelector onChange= {(categoryId,parentCategoryId) => {this.onCategoryChange(categoryId,parentCategoryId)}} />
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">商品价格</label>
                        <div className="col-md-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" 
                                    placeholder="价格"
                                    name="price"
                                    onChange = {(e) => {this.onValueChange(e)}}
                                     />
                                    <span className="input-group-addon" id="basic-addon2">元</span>
                                </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-md-2 control-label">商品库存</label>
                        <div className="col-md-3">
                            <div className="input-group">
                                    <input type="text" className="form-control"
                                     placeholder="库存"
                                     name="stock"
                                     onChange = {(e) => {this.onValueChange(e)}}
                                      />
                                    <span className="input-group-addon" id="basic-addon2">件</span>
                           </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-md-2 control-label">商品图片</label>
                        <div className="col-md-10">
                            {
                                this.state.subImages.length ? this.state.subImages.map(
                                    (image, index) => (
                                    <div className='img-con'  key={index} >
                                        <img src={image.url} />
                                        <i className="fa fa-close" index={index} onClick={(e) => {this.onImagesDelete(e)}}></i>
                                    </div>
                                  )
                                ) : (<div>请上传图片</div>)
                            }
                        </div>
                        <div className="col-md-10 col-md-offset-2 file-upload-con">
                           <FileUploader OnSuccess={(res) => {this.onUploadSuccess(res)}} onError = {(errMsg) => {this.onUploadError(errMsg)}} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-md-2 control-label">商品详情</label>
                        <div className="col-md-10">
                              <Editor onValueChange={(value) => {this.onEditorChange(value)}} />
                        </div>
                    </div> 
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-primary" onClick = {(e) => {this.onSubimt(e)}}>提交</button>
                            </div>
                        </div>
                    </div>
        </div>
    )
  }
}


export default ProductSave