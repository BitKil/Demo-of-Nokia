const { connection } = require('./conn')
import { Modal } from 'antd'
import React from 'react'
const { confirm } = Modal
connection.connect((err) => {
  if (err) {
    console.log("数据库连接失败")
  }
  console.log("数据库连接成功")
})

class Tan extends React.Component {
  state = {
    assigned: "123",
    grade: ["A", "B", "C"]
  }
  inputAssigned = (e) => {
    this.setState({
      assigned: e.target.value
    })
    this.props.getSonMsg(e.target.value)
  }
  inputGrade = (e) => {
    this.props.getSonMsg(e.target.value)
  }
  render () {
    return (
      <>
        <label>Assigned:
          <input type="text"
            value={this.state.assigned}
            onChange={this.inputAssigned}
            name="Assigned">
          </input>
        </label>
        <br></br>
        <label>Grade:
          <select name="Grade" onChange={this.inputGrade}>
            {this.state.grade.map((ele, index) => {
              return (
                <option key={index}>{ele}</option>
              )
            }

            )}
          </select>
        </label>
      </>

    )
  }
}




const App = () => {
  var arr = []
  const getSonMsg = (sonMsg) => {
    arr.push(sonMsg)
  }
  const showOne = () => {
    Modal.info({
      title: '请输入您的信息:',
      content: (
        <Tan getSonMsg={getSonMsg} />
      ),
      onOk () {
        console.log(arr)
        let ass = arr[arr.length - 2]
        let grade = arr[arr.length - 1]
        arr = []
        console.log(ass, grade)
      },
    })
  }
  const showTwo = () => {
    confirm({
      title: 'Two',
      content: 'Some descriptions',

      onOk () {
        console.log('OK')
      },

      onCancel () {
        console.log('Cancel')
      },
    })
  }
  const showThree = () => {
    confirm({
      title: 'Three',
      content: <div>1</div>,

      onOk () {
        console.log('OK')
      },

      onCancel () {
        console.log('Cancel')
      },
    })
  }
  const showFour = () => {
    confirm({
      title: 'Four',
      content: 'Some descriptions',

      onOk () {
        console.log('OK')
      },

      onCancel () {
        console.log('Cancel')
      },
    })
  }
  return (
    <>
      <div className="main" >
        <div class="item one" onClick={showOne}>
          <h2>RCA</h2>
        </div>
        <div class="item two" onClick={showTwo}><h2>Why</h2></div>
        <div class="item two" onClick={showTwo}><h2>Why</h2></div>
        <div class="item two" onClick={showTwo}><h2>Why</h2></div>
        <div class="item two" onClick={showTwo}><h2>Why</h2></div>
        <div class="item two" onClick={showTwo}><h2>Why</h2></div>
        <div class="item three" onClick={showThree}><h2>Root Cause</h2></div>
        <div class="item four" onClick={showFour}><h2>Action</h2></div>
        <div class="item one" onClick={showOne}><h2>RCA</h2></div>
        <div class="item two" onClick={showTwo}><h2>Why</h2></div>
        <div class="item two" onClick={showTwo}><h2>Why</h2></div>
        <div class="item two" onClick={showTwo}><h2>Why</h2></div>
        <div class="item two" onClick={showTwo}><h2>Why</h2></div>
        <div class="item two" onClick={showTwo}><h2>Why</h2></div>
        <div class="item three" onClick={showThree}><h2>Root Cause</h2></div>
        <div class="item four" onClick={showFour}><h2>Action</h2></div>
      </div >
    </>
  )
}


export default App
