import React from 'react';
import WasherDemo from './WasherDemo';

const style = {
    titleStyle : {
        fontSize : '5vw',
        marginTop : '5vh'
    }
}
class Demo extends React.Component{
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