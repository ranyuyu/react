import React,{ Component } from 'react'

function HocComponents(WarpComponents){
        // 返回新的组件
        return class Home extends Component {
            render() {
                // console.log(this.props.name,'返回新组件');
                return (
                    <div className="HocComponents">
                         <WarpComponents {...this.props}></WarpComponents>
                    </div>
                )
            }
        }
}

export default HocComponents

// 声明一个高阶组件，它是一个函数，将原来的组件作为参数传进来，返回一个新的组件
// 知识盲点 React 和 React,{ Component } 的区别
// export 和 export  default 的区别