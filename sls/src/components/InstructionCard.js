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
        borderRadius: '4px',
        height : '15vmax',
        margin: 'auto 5px',
    },
    text: {
      margin: 'auto',
      justifyContent: 'center',
      fontSize: '1em',
    }
};

class InstructionCard extends React.Component{
    render(){
        const {image, description} = this.props;
        return(
            <div style={style.container}>
                <img src={image} alt='instruction' style={style.image}/>
                <p style={style.text}>{description}</p>
            </div>
        );
    }
}

export default InstructionCard;
