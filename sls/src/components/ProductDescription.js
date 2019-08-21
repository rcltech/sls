import React from 'react';

const description = "The Smart Laundry System aims to help R.C. Lee hall residents by tracking the availability of laundry machines. Quite often when we are about to do our laundry, we find all of the machines are being used. So, RC Tech Club has come out with a simple solution to tackle this issue. By integrating a simple button to each washer and connect them to this website, now everybody can check the status of each washer, anytime, anywhere. As our product development team always seeks for improvement, you are welcomed to leave any comments or suggestions by sending us an email in the 'Report' section."

const style = {
    container : {
        width : 'min(80vw,400px)',
        marginBottom : '20px'
    },
    titleStyle : {
        fontSize : '1.5em'
    },
    descriptionStyle : {
        padding : '10px',
        border : '0.5px solid #eee',
        borderRadius : '5px',
        fontSize: '1em',
    }
}

class ProductDescription extends React.Component{
    render(){
        return(
            <div style={style.container}>
                <h1 style={style.titleStyle}>Product Description</h1>
                <div style={style.descriptionStyle}>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

export default ProductDescription;
