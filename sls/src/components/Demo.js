import React from 'react';
import WasherDemo from './WasherDemo';

const style = {
    titleStyle : {
        fontSize : 'min(40px,8vw)',
        marginTop : '5vh'
    }
}
class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status : 1
        }
    }
    render(){
        return(
            <div>
                <h1 style = {style.titleStyle}>2. Demo</h1>
                <WasherDemo/>
            </div>
        );
    }
}

export default Demo;