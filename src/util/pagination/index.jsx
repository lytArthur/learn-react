import React            from 'react';
import　Rcpagination    from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <Rcpagination {...this.props}
                           hideOnSinglePage
                           showQuickJumper
                        />
                </div>
            </div>
        )
    }
}

export default Pagination