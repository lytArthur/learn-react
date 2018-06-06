
import React          from 'react';
import PageTitle      from 'component/page-title/index.jsx';
import { Link }       from 'react-router-dom';
import　Pagination    from 'util/pagination/index.jsx';
import MUtil          from 'util/mm.jsx';
import Product        from 'service/product-service.jsx';
import TableList      from 'util/table-list/index.jsx';

const _mm       = new MUtil();
const _product      = new Product();
class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list           : [],
            total          : 0,
            pageNum        : 1
        }
    }
    componentDidMount(){
        this.LoadUserList();
    }
    LoadUserList() {
        _product.getProductList(this.state.pageNum).then(res => {
            this.setState(res)
        }, errMsg => {
            this.setState({
                list: []
            })
            _mm.errorTips(errMsg);
        })
    }
    //页数发生变化的时候
    onPageNumChange(pageNum) {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.LoadUserList();
        })
    }
    render(){ ['商品ID','商品信息','价格','状态','操作'];
        let mnueList = [
            {name: '商品ID',width: '10%'},
            {name: '商品信息',width: '50%'},
            {name: '价格',width: '10%'},
            {name: '状态',width: '15%'},
            {name: '操作',width: '15%'},
        ];
        return (
            <div id="page-wrapper">
              <PageTitle title="商品列表" />
              <TableList tableHeads ={mnueList} >
                  {
                    this.state.list.map((item, index) => {
                        return (
                              <tr key={index}>
                                  <td>{item.id}</td>
                                  <td>
                                      <p>{item.username}</p>
                                      <p>{item.subtitle}</p>
                                  </td>
                                  <td>￥{item.price}</td>
                                  <td>
                                     <span>{item.status==1 ? '在售': '已下架'}</span>
                                  </td>
                                  <td>
                                      <Link to={`/product/detail/${item.id}`}>查看详情</Link>
                                      <Link to={`/product/save/${item.id}`}>编辑</Link>
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