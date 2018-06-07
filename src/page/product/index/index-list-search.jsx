

import   React              from 'react';


class ListSearch extends React.Component{
  constructor(props){
    super(props);   
    this.state = {
        searchType    : 'productId',
        searchKeyword : ''
    }
  }
  onValueChange(e) {
      let name  = e.target.name,
          value = e.target.value
      this.setState({
          [name] : value
      });
  }
  onSearch() {
      this.props.onSearch(this.state.searchType, this.state.searchKeyword);
  }
  render(){
    return (
         <div>
            <div className="row search-wrapper">
                  <div className='col-md-12'>
                       <div className="form-inline">
                                <div className="form-group">
                                    <select className="form-control"
                                      name="searchType"
                                      onChange={(e) => {this.onValueChange(e)}}
                                    >
                                            <option value="按商品ID查询">按商品ID查询</option>
                                            <option value="按商品名称查询">按商品名称查询</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputPassword3" placeholder="关键字"
                                      name="searchKeyword"
                                      onChange={(e) => {this.onValueChange(e)}}
                                    />
                                </div>
                                <button className="btn btn-primary" onClick = {(e) => {this.onSearch(e)}}>搜索</button>
                        </div>
                  </div>
            </div>
         </div>
    )
  }
}


export default ListSearch