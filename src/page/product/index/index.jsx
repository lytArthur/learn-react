
import React          from 'react';
import PageTitle      from 'component/page-title/index.jsx';
import { Link }       from 'react-router-dom';
import　Pagination    from 'util/pagination/index.jsx';
import MUtil          from 'util/mm.jsx';
import Product        from 'service/product-service.jsx';
import TableList      from 'util/table-list/index.jsx';
import ListSearch     from './index-list-search.jsx';
import "./index.scss";

import '../../../component/layout/theme.css';
const _mm       = new MUtil();
const _product      = new Product();
class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list           : [],
            total          : 0,
            pageNum        : 1,
            listType       : "list"
        }
    }
    componentDidMount(){
        this.LoadProductList();
    }
    LoadProductList() {
        let listParam = {};
        listParam.listType = this.state.listType;
        listParam.pageNum  = this.state.pageNum;
        if(this.state.listType === 'search'){
            listParam.searchType  = this.state.searchType;
            listParam.keyword        = this.state.searchKeyword;
        }
        _product.getProductList(listParam).then(res => {
            this.setState(res);
        }, errMsg => {
            this.setState({
                list: []
            })
            _mm.errorTips(errMsg);
        })
    }
    onSearch(searchType, searchKeyword) {
        let listType = searchType === "" ? "lsit" : "search";
        this.setState({
            listType        : listType,
            pageNum         : 1,
            searchType      : searchType,
            searchKeyword   : searchKeyword
        },() => {
            this.LoadProductList();
        })
    }
    //页数发生变化的时候
    onPageNumChange(pageNum) {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.LoadProductList();
        })
    }
    //改变商品状态
    onSetProductStatus(e, productId, currentStatus) {
        let newCurrentStatus = currentStatus == 1 ? 2 : 1;
        let confirmTips      = currentStatus == 1 ? "确定要下架该商品吗？" : "确定要上架该商品吗？";
       if(window.confirm(confirmTips)){
           _product.setProductStatus({
                productId:productId,
                status: newCurrentStatus
           }).then((res) => {
               _mm.successTips(res);
               this.LoadProductList();
           }, (errMsg) => {

           })
       }
    }
    render(){ 
        let mnueList = [
            {name : '商品ID',   width  : '10%'},
            {name : '商品信息', width  : '50%'},
            {name : '价格',     width  : '10%'},
            {name : '状态',     width  : '15%'},
            {name : '操作',     width  : '15%'}
        ];
        return (
            <div id="page-wrapper">
              <PageTitle title="商品列表">
                    <div className="page-header-right">
                        <Link className="btn btn-primary" to="/product/save"><i className="fa fa-plus fa-fw"></i>添加商品</Link>
                    </div>
              </PageTitle>
              <ListSearch onSearch={(searchType, searchKeyword) => {this.onSearch(searchType, searchKeyword)}} />
              <TableList tableHeads ={mnueList} >
                  {
                    this.state.list.map((item, index) => {
                        return (
                              <tr key={index}>
                                  <td>{item.id}</td>
                                  <td>
                                      <p>{item.name}</p>
                                      <p>{item.subtitle}</p>
                                  </td>
                                  <td>￥{item.price}</td>
                                  <td>
                                     <p>{item.status==1 ? '在售': '已下架'}</p>
                                     <button className="btn btn-xs btn-warning" onClick={(e) => 
                                        {this.onSetProductStatus(e, item.id, item.status)}}>
                                        {item.status == 1 ? "下架" : "上架"}
                                     </button>
                                  </td>
                                  <td>
                                      <Link className='opear' to={`/product/detail/${item.id}`}>详情</Link>
                                      <Link className='opear' to={`/product/save/${item.id}`}>编辑</Link>
                                  </td>
                              </tr>
                        )
                    })
                  }
              </TableList >
              <Pagination current = {this.state.pageNum} total = {this.state.total} onChange = {(pageNum) =>  {
                  this.onPageNumChange(pageNum)
              }} />
            </div>
        )
    }
}

export default ProductList