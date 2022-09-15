// const { connection } = require('./conn')
// import { render } from '@testing-library/react'
import { Modal, Form, Input, Button, Select, DatePicker } from 'antd'
import React from 'react'
import { MessageOutlined } from '@ant-design/icons'
class Tan1 extends React.Component {
  onFinish = (values) => {
    this.props.getForm1Msg(values)
  }
  render () {
    return (

      <Form
        name="1"
        onFinish={this.onFinish}>
        <Form.Item
          label="Assigned To"
          name="ass"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Grade"
          name="grade"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option value="A">A</Select.Option>
            <Select.Option value="B">B</Select.Option>
            <Select.Option value="C">C</Select.Option>
            <Select.Option value="D">D</Select.Option>
            <Select.Option value="E">E</Select.Option>
            <Select.Option value="F">F</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 20,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    )
  }
}
class Tan2 extends React.Component {
  onFinish = (values) => {
    this.props.getForm2Msg(values)
  }
  render () {
    return (

      <Form
        name="2"
        onFinish={this.onFinish}>
        <Form.Item
          label="Q:"
          name="Q"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="A:"
          name="A"
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 20,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    )
  }
}
class Tan3 extends React.Component {
  onFinish = (values) => {
    this.props.getForm3Msg(values)
  }
  render () {
    return (

      <Form
        name="1"
        onFinish={this.onFinish}>
        <Form.Item
          label="free Text:"
          name="freeText"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 20,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    )
  }
}
class Tan4 extends React.Component {
  onFinish = (values) => {
    this.props.getForm4Msg(values)
  }
  render () {
    return (

      <Form
        name="4"
        onFinish={this.onFinish}>
        <Form.Item
          label="Action Proposal"
          name="ap"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Cause category"
          name="cc"
        >
          <Select>
            <Select.Option value="one">one</Select.Option>
            <Select.Option value="two">two</Select.Option>
            <Select.Option value="three">three</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Cause subcategory"
          name="cs"
        >
          <Select>
            <Select.Option value="A">A</Select.Option>
            <Select.Option value="B">B</Select.Option>
            <Select.Option value="C">C</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Action type"
          name="at"
        >
          <Select>
            <Select.Option value="basketball">basketball</Select.Option>
            <Select.Option value="football">football</Select.Option>
            <Select.Option value="pingpang">pingpang</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Assigned To"
          name="ass"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="DatePicker"
          name="time"
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 20,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    )
  }
}
class App extends React.Component {
  state = {
    //控制model显示哪个表单
    showOneFrom: false,
    showTwoFrom: false,
    showThreeFrom: false,
    showFourFrom: false,
    //控制div的css样式
    isTrue1: false,
    isTrue21: false,
    isTrue22: false,
    isTrue23: false,
    isTrue24: false,
    isTrue25: false,
    isTrue3: false,
    isTrue4: false,
    //控制二号表单的输入
    is21: false,
    is22: false,
    is23: false,
    is24: false,
    is25: false,
    //需要输入的数据
    ass: "",
    grade: "",
    Q1: "",
    A1: "",
    Q2: "",
    A2: "",
    Q3: "",
    A3: "",
    Q4: "",
    A4: "",
    Q5: "",
    A5: "",
    freeText3: "",
    ap: "",
    ass4: "",
    at: "",
    cc: "",
    cs: "",
    time: [],
    //model是否打开
    isModalOpen: false
  }
  getForm1Msg = (values) => {
    this.setState({
      ass: values.ass,
      grade: values.grade,
      isModalOpen: false,
      isTrue1: true
    })
  }
  getForm2Msg = (values) => {
    if (this.state.is21) {
      this.setState({
        Q1: values.Q,
        A1: values.A,
        isModalOpen: false,
        isTrue21: true
      })
    }
    if (this.state.is22) {
      this.setState({
        Q2: values.Q,
        A2: values.A,
        isModalOpen: false,
        isTrue22: true
      })
    }
    if (this.state.is23) {
      this.setState({
        Q3: values.Q,
        A3: values.A,
        isModalOpen: false,
        isTrue23: true
      })
    }
    if (this.state.is24) {
      this.setState({
        Q4: values.Q,
        A4: values.A,
        isModalOpen: false,
        isTrue24: true
      })
    }
    if (this.state.is25) {
      this.setState({
        Q5: values.Q,
        A5: values.A,
        isModalOpen: false,
        isTrue25: true
      })
    }
  }
  getForm3Msg = (values) => {
    this.setState({
      freeText3: values.freeText,
      isModalOpen: false,
      isTrue3: true
    })
  }
  getForm4Msg = (values) => {
    this.setState({
      ap: values.ap,
      ass4: values.ass,
      at: values.at,
      cc: values.cc,
      cs: values.cs,
      time: values.time._d.toString().slice(0, 15),
      isModalOpen: false,
      isTrue4: true
    })
  }
  handleOk = () => {
    this.setState({
      isModalOpen: false
    })
  }
  handleCancel = () => {
    this.setState({
      isModalOpen: false
    })
  }
  showFrom1 = () => {
    this.setState({
      showOneFrom: true,
      showTwoFrom: false,
      showThreeFrom: false,
      showFourFrom: false,
      isModalOpen: true
    })
  }
  showFrom2 = (e) => {
    console.log(e.target.id)
    if (e.target.id === '1') { this.setState({ is21: true, is22: false, is23: false, is24: false, is25: false }) }
    else if (e.target.id === '2') { this.setState({ is21: false, is22: true, is23: false, is24: false, is25: false }) }
    else if (e.target.id === '3') { this.setState({ is21: false, is22: false, is23: true, is24: false, is25: false }) }
    else if (e.target.id === '4') { this.setState({ is21: false, is22: false, is23: false, is24: true, is25: false }) }
    else { this.setState({ is21: false, is22: false, is23: false, is24: false, is25: true }) }
    this.setState({
      showOneFrom: false,
      showTwoFrom: true,
      showThreeFrom: false,
      showFourFrom: false,
      isModalOpen: true
    })

  }
  showFrom3 = () => {
    this.setState({
      showOneFrom: false,
      showTwoFrom: false,
      showThreeFrom: true,
      showFourFrom: false,
      isModalOpen: true
    })
  }
  showFrom4 = () => {
    this.setState({
      showOneFrom: false,
      showTwoFrom: false,
      showThreeFrom: false,
      showFourFrom: true,
      isModalOpen: true
    })
  }
  render () {
    return (
      <>
        <Modal title="请输入以下信息" open={this.state.isModalOpen} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
          {this.state.showOneFrom ? <Tan1 getForm1Msg={this.getForm1Msg} /> : (this.state.showTwoFrom ? <Tan2 getForm2Msg={this.getForm2Msg} /> : (this.state.showThreeFrom ? <Tan3 getForm3Msg={this.getForm3Msg} /> : (this.state.showFourFrom ? <Tan4 getForm4Msg={this.getForm4Msg} /> : "123")))}
        </Modal>
        <div className="main" >
          <div className={this.state.isTrue1 ? "item oneTrue" : "item oneFalse"} onClick={this.showFrom1}>
            <h2>RCA <MessageOutlined />0</h2>
            <p><i>Why the fault was</i></p>
            <p><i>introduced?</i></p>
            <br></br>
            <h4>Assigned to:</h4>
            <div id="ass">{this.state.ass}</div>
            <h4>grade:</h4>
            <div id="grade"><p>{this.state.grade}</p></div>
          </div>
          <div id="1" className={this.state.isTrue21 ? "item twoTrue" : "item twoFalse"} onClick={this.showFrom2}>
            <h2>Why <MessageOutlined />0</h2>
            <div className='Why' id='1'>
              <label>Q:</label>{this.state.Q1}
            </div>
            <hr></hr>
            <label>A:</label>{this.state.A1}
          </div>
          <div id="2" className={this.state.isTrue22 ? "item twoTrue" : "item twoFalse"} onClick={this.showFrom2}>
            <h2>Why <MessageOutlined />0</h2>
            <div className='Why' id="2" >
              <label>Q:</label>{this.state.Q2}
            </div>
            <hr></hr>
            <label>A:</label>{this.state.A2}
          </div>
          <div id="3" className={this.state.isTrue23 ? "item twoTrue" : "item twoFalse"} onClick={this.showFrom2}>
            <h2>Why <MessageOutlined />0</h2>
            <div className='Why' id="3">
              <label>Q:</label>{this.state.Q3}
            </div>
            <hr></hr>
            <label>A:</label>{this.state.A3}
          </div>
          <div id="4" className={this.state.isTrue24 ? "item twoTrue" : "item twoFalse"} onClick={this.showFrom2}>
            <h2>Why <MessageOutlined />0</h2>
            <div className='Why' id="4">
              <label>Q:</label>{this.state.Q4}
            </div>
            <hr></hr>
            <label>A:</label>{this.state.A4}
          </div>
          <div id="5" className={this.state.isTrue25 ? "item twoTrue" : "item twoFalse"} onClick={this.showFrom2}>
            <h2>Why <MessageOutlined />0</h2>
            <div className='Why' id="5">
              <label>Q:</label>{this.state.Q5}
            </div>
            <hr></hr>
            <label>A:</label>{this.state.A5}
          </div>
          <div className={this.state.isTrue3 ? "item threeTrue" : "item threeFalse"} onClick={this.showFrom3}>
            <h2>Root Cause <MessageOutlined />0</h2>
            <p>{this.state.freeText3}</p>
          </div>
          <div className={this.state.isTrue4 ? "item fourTrue" : "item fourFalse"} onClick={this.showFrom4}>
            <h2>Action <MessageOutlined />0</h2>
            <div className='rootap'>
              <h4>Action proposal:</h4>
              {this.state.ap}
            </div>
            <label>Cause category:</label>
            {this.state.cc}
            <br></br>
            <label>Cause subcategory:</label>
            {this.state.cs}
            <br></br>
            <label>Action type:</label>
            {this.state.at}
            <br></br>
            <label>Assaigned to:</label>
            {this.state.ass4}
            <br></br>
            <label>date:</label>
            {this.state.time}
          </div>
        </div >
      </>
    )
  }
}


export default App
