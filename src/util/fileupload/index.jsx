import  React                  from 'react';
import  FileUpload             from './react-fileupload.jsx';

class FileUploader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        /*set properties*/
        const options = {
            baseUrl         : '/manage/product/upload.do',
            fileFieldName   : 'upload_file',
            dataType        : 'json',
            chooseAndUpload : true,
            uploadSuccess   : (res) => {
                this.props.OnSuccess(res.data)
            },
            uploadError     : (res) => {
                this.props.OnError(res.message || "上传图片出错了")
            }
        }
        /*Use FileUpload with options*/
        /*Set two dom with ref*/
        return (
            <FileUpload options={options}>
                <button className='btn-default btn-xs' ref="chooseAndUpload">请选择图片</button>
            </FileUpload>
        )	        
    }
}

export default FileUploader