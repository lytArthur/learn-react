

import   React              from 'react';
import   { BrowserRouter as Router, Redirect, Route, Link, Switch } from 'react-router-dom';
import MUtil          from 'util/mm.jsx';
import Product        from 'service/product-service.jsx';

const _mm = new MUtil();
const _product = new Product();


import './category.scss';
class CategorySelector extends React.Component{
  constructor(props){
    super(props);
    this.state ={
        firstCatagoryList  : [],
        firstCatagoryId    : 0,
        secondCatagoryList : [],
        secondCatagoryId    : 0
    }   
  }
  componentDidMount() {
      this.loadFirstCategory();
  }
  //加载一级分类
  loadFirstCategory() {
      _product.getCategoryList().then(res => {
          this.setState({
            firstCatagoryList: res
        })
      }, errMsg => {
          _mm.errorTips(errMsg);
      })
  }
  //选择一级值
  onFirstCategoryChange(e) {
      let  newValue = e.target.value || 0;
      this.setState({
        firstCatagoryId     : newValue,
        secondCatagoryId    : 0,
        secondCatagoryList  : []
      }, () => {
          this.loadSecondCategory();
          this.onPropsCategoryChange();
      });
  }
  onSecondCategoryChange(e) {
    let  newValue = e.target.value;
    this.setState({
        secondCatagoryId : newValue
    }, () => {
        this.onPropsCategoryChange();
    });
 }
  //加载二级分类
  loadSecondCategory() {
    _product.getCategoryList(this.state.firstCatagoryId).then(res => {
        this.setState({
          secondCatagoryList: res
      })
    }, errMsg => {
        _mm.errorTips(errMsg);
    })
  }
  //传递给父组件选中的结果
  onPropsCategoryChange() {
      
  }
  render(){
    return (
        <div>
               <div className="col-md-10">
                    <select className="form-control cate-select"
                        onClick = {(e) => {this.onFirstCategoryChange(e)}}
                    >
                    <option value="">请选择一级品类</option>
                        {
                            this.state.firstCatagoryList.map(
                                (item, index) => <option value={item.id} key={index}>{item.name}</option>)  
                        }
                    </select>
                    
                    {
                        this.state.secondCatagoryList.length ? (
                            <select className="form-control cate-select"
                              onClick = {(e) => {this.onSecondCategoryChange(e)}}
                            >
                            <option value="">请选择二级品类</option>
                            {
                                 this.state.secondCatagoryList.map(
                                     (item, index) => <option value={item.id} key={index}>{item.name}</option>)  
                            }
                         </select>
                        ) : null
                    }

                </div>
        </div>
    )
  }
}


export default CategorySelector