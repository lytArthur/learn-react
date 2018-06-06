import React          from 'react';
import PageTitle      from 'component/page-title/index.jsx';
import { Link }       from 'react-router-dom';
import MUtil          from 'util/mm.jsx';
import Statistic      from '../../service/statistic-service.jsx';
import './index.scss'

const _mm             = new MUtil();
const _statistic      = new Statistic();
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            userCount       : '',
            produceCount    : '',
            orderCount      : ''  
        }
    }
    componentDidMount(){
        this.loadCount();
    }
    loadCount() {
        _statistic.getHomeCount().then(res => {
            this.setState({
                userCount      : res.userCount,
                productCount   : res.productCount,
                orderCount     : res.orderCount
            });
        }, errMsg => {
            _mm.errorTips(errMsg);
        })
    }
    render(){
        return (
            <div id="page-wrapper">
                    <PageTitle title="首页1" />
                    <div className="row">
                        <div className="col-md-4">
                             <Link to="/user" className='color-box brown'>
                                 <p className="count">{this.state.userCount}</p>
                                 <p className='desc'>
                                     <i className='fa fa-user-o'></i>
                                     <span>用户数量</span>
                                 </p>
                             </Link>
                        </div>

                        <div className="col-md-4">
                             <Link to="/product"  className='color-box green'>
                                 <p className="count">{this.state.productCount}</p>
                                 <p className='desc'>
                                     <i className='fa fa-list'></i>
                                     <span>商品总数</span>
                                 </p>
                             </Link>
                        </div>

                        <div className="col-md-4">
                             <Link to="/order"  className='color-box blue'>
                                 <p className="count">{this.state.orderCount}</p>
                                 <p className='desc'>
                                     <i className='fa fa-check-square'></i>
                                     <span>订单数量</span>
                                 </p>
                             </Link>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Home