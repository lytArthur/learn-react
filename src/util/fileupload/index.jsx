import   React              from 'react';
import { Upload, Icon, Modal } from 'antd';
import  'antd/dist/antd.css'; 

class AntdFileload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
          };
        
    };
    handlePreview  (file)  {
        this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
        });
    }
    handleCancel(file) {
        this.setState({ 
            previewVisible: false 
        });
    }
    handlePreview (file) {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
  
    handleChange ({ fileList }) {
        this.setState({ fileList })
    }
    render() {
      const { previewVisible, previewImage, fileList } = this.state;
      const uploadButton = (
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">上传图片</div>
        </div>
      );
      return (
        <div className="clearfix">
          <Upload
                action="/manage/product/upload.do"
                listType="picture-card"
                fileList={fileList}
                onPreview={(file) => this.handlePreview(file)}
                onChange={({fileList}) => {this.handleChange({fileList})}}
          >
            {fileList.length >= 10 ? null : uploadButton}
          </Upload>
           <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
               <img alt="example" style={{ width: '100%' }} src={previewImage} />
           </Modal>
        </div>
      );
    }
  }

  export default AntdFileload