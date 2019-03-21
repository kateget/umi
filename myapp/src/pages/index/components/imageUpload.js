import { Form,Input,Icon,Button,Upload,Modal } from 'antd'
import {Component} from 'react'
import styles from './imageUpload.css'
import { connect } from 'dva'

@Form.create()
// @connect((state)=>state.imgUpload)

class ImageUpload extends Component{

  state = {
      previewVisible: false,
      previewImage: '',
      //   fileList: [{
      //       uid: '-1',
      //       name: 'xxx.png',
      //       status: 'done',
      //       url: 'https://i.pximg.net/img-original/img/2016/03/07/00/20/32/55667523_p0.jpg',
      //   }],
      fileList: [],
  };

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
          if (err) {
              return false
          }
          this.success()
          this.props.dispatch({
              type: 'imgUpload/fun_test',
              payload: {...values}
          })
      });
  }

  renderViwe = ()=>{
      return(
          <div>
              <h3>添加图片</h3>
          </div>
      );
  }

  handlePreview = (file) => {
      this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
      });
  }

  handleChange = ({ fileList }) => {
      return this.setState({ fileList })
  }
  success = ()=>{
      Modal.success({
          title: '图片提交',
          content: '提交成功！',
      });
  }

  error = ()=>{
      Modal.error({
          title: 'This is an error message',
          content: 'some messages...some messages...',
      });
  }

  render() {
      const { getFieldDecorator } = this.props.form;
      const { fileList } = this.state
      const { isUpload } = this.props
      const uploadButton = (
          <div>
              <Icon type="plus" />
              <div className="ant-upload-text">Upload</div>
          </div>
      );
      const formItemLayout = {
          labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
          },
          wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
          },
      }
      const tailFormItemLayout = {
          wrapperCol: {
              xs: {
                  span: 24,
                  offset: 0,
              },
              sm: {
                  span: 16,
                  offset: 8,
              },
          },
      }
      return(
          <div className={styles.upload_wrap}>
              {this.renderViwe()}
              <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                  <Form.Item label="图片类别">
                      {getFieldDecorator('category',{
                          rules: [{
                              required:true,message:'please input you category',
                          }],
                      })(
                          <Input></Input>
                      )}

                  </Form.Item>
                  <Form.Item
                      label="图片名称"
                  >
                      {getFieldDecorator('name', {
                          rules: [{ required: false, message: 'Please input photo name!' }],
                      })(
                          <Input placeholder="输入图片名称，不输入的话，选择图片上传默认名称" />
                      )}
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                      {getFieldDecorator('img',{
                          rules: [{required: true}]
                      })(
                          <Upload
                          // action="//jsonplaceholder.typicode.com/posts/"
                              listType="picture-card"
                              fileList={fileList}
                              onPreview={this.handlePreview}
                              onChange={this.handleChange}
                          >
                              {fileList.length >= 3 ? null : uploadButton}
                          </Upload>
                      )}

                  </Form.Item>

                  <Form.Item
                      wrapperCol={{ span: 7, offset: 6 }}
                  >
                      <Button type="primary" htmlType="submit">Submit</Button>
                  </Form.Item>
              </Form>
              <Modal
                  title="Modal"
                  visible={this.state.visible}
                  onOk={this.hideModal}
                  // onCancel={this.hideModal}
                  okText="确认"
                  // cancelText="取消"
              >
                  <p>上传成功！</p>
              </Modal>
          </div>
      )
  }
}
export default connect((state)=>state.imgUpload)(ImageUpload)
