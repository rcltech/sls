import React from 'react';

const github_url = "https://github.com/rcltech/sls";

const description = <div><p>The Smart Laundry System aims to help R.C. Lee hall residents by tracking the availability of laundry machines. Quite often when we are about to do our laundry, we find all of the machines are being used. So, RC Tech Club has come out with a simple solution to tackle this issue. We have integrated light sensors that would detect the status of each washer, and connected them to this website. Now everyone can easily find out if there's an available washer when they want to do laundry. </p><p>As our product development team always seeks for improvement, you are welcomed to leave any comments or suggestions by sending us an email in the 'Report' section. For those who are interested in building a similar system, checkout our <a href={github_url}>github project</a>.</p></div>



const style = {
    container : {
        width: '100%',
        margin: 'auto',
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
