import React from 'react';
import WasherCard from './WasherCard';
import available from '../images/available.png';
import unavailable from '../images/unavailable.png';
import base from '../images/base.png';


const description = {
    available : "This means the washing machine is not being used, feel free to pick your laundry bag up and do the business!",
    unavailable : "Oops, someone is using the washing machine, be patient and always re-visit this website to check the washers' status",
    base : "This doesn't really mean anything. It tells you that the browser is busy loading the webpage!"
}

const style = {
    iconsStyle : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-evenly',
    },
    titleStyle : {
        fontSize : '5vw'
    }
}

class Icons extends React.Component {
    render(){
        return (
            <div style = {style.iconsStyle}>
                <h1 style={style.titleStyle}>1. Washer Status</h1>
                <WasherCard image = {available} description = {description.available}/>
                <WasherCard image = {unavailable} description = {description.unavailable}/>
                <WasherCard image = {base} description = {description.base}/>
            </div>
        );
    }
}

export default Icons;