import React from 'react';

const style = {
    container : {
        margin: '5px auto',
        padding : '5px',
        border : '1px solid #eee',
        borderRadius: '5px',
        display: 'inline-flex',
    },
    image : {
        height : '20vmax',
        margin: 'auto 5px',
    },
    text: {
      margin: 'auto',
      justifyContent: 'center',
      fontSize: '1em',
    }
}
class WasherCard extends React.Component{
    render(){
        return(
            <div style={style.container}>
                <img src={this.props.image} alt='washer status' style={style.image}/>
                <p style={style.text}>{this.props.description}</p>
            </div>
        );
    }
}

export default WasherCard;
