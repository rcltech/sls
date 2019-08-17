import React from 'react';

const style = {
    container : {
        padding : 0,
        border : '1px solid #eee'
    },
    image : {
        width : 'min(400px,80vw)',
    }
}
class WasherCard extends React.Component{
    render(){
        return(
            <div style={style.container}>
                <img src={this.props.image} alt='washer status' style={style.image}/>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default WasherCard;