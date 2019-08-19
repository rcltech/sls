import React from 'react';

const description = "The Smart Laundry System aims to help all R.C. Lee residents in tracking the availability of washers in the hall.\
                      Quiet often when we are about to do our laundry, we need to go back and forth to the laundry room on the 16th floor to check \
                      if there is a washer which is not being used. Therefore, RC Tech Club came out with a simple solution to tackle this issue. \
                      By integrating a simple button to each washer and connect them to this website, now everybody can always check the status of each washer, anytime, anywhere. \
                      Our product development team always seeks for improvement, feel free to leave any comments or suggestions in the 'Report' section."

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
        borderRadius : '5px'
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