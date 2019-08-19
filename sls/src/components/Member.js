import React from 'react';

const style = {
    container : {
        display : 'grid',
        gridTemplateColumns : '30% 70%',
        margin : '20px 0',
        padding : '10px',
        border : '0.5px solid #eee',
        borderRadius : '20px'
    },
    image : {
        borderRadius : '50%',
        width : '100%'
    },
    text : {
        textAlign : 'left',
        padding : '5px 0 0 20px',
        fontSize : '3vw'
    },
    p : {
        margin : 0
    }
}

class Member extends React.Component{
    render(){
        const { data } = this.props;
        return (
            <div style={style.container}>
                <img src={data.image} alt='member' style={style.image}/>
                <div style={style.text}>
                    <p style={style.p}><b>{data.name}</b></p>
                    <p style={style.p}>{data.role}</p>
                </div>
            </div>
        );
    }
}

export default Member