import React from 'react'

class CommonComponents extends React.Component {
    render() {
        return (
            <div className="App">
                 我是开始的CommonComponents普通组件
                 <div>{ this.props.name }</div>
                 <div>{ this.props.age }岁</div>
            </div>
        )
    }
}

export default  CommonComponents