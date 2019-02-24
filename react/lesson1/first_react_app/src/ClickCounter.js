/* 
* @Author: lianglizhong
* @Date:   2019-02-24 11:48:15
* @Last Modified by:   lianglizhong
* @Last Modified time: 2019-02-24 12:21:21
*/

'use strict';
import React,{Component} from 'react';
class ClickCounter extends Component {
    constructor(props){
        super(props);
        this.onClickButton=this.onClickButton.bind(this);
        this.state={
            count:0
        }
    }

    onClickButton(){
        this.setState({
            count:this.state.count+1
        })
    }

    render(){
        // 定义样式
        const counterStyle={
            margin:'16px',
            color:'#f0c'
        }
        return (
            <div>
                <button style={counterStyle} onClick={this.onClickButton}>
                    click me
                </button>
                <span>count:{this.state.count}</span>
            </div>
        )
    }
} 

export default ClickCounter;