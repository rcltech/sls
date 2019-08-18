import React from 'react';
import InstructionCard from './InstructionCard';
import LED_on from '../images/LED_on.png';
import LED_off from '../images/LED_off.png';
import LED_off_pressed from '../images/LED_off_pressed.png';
import LED_on_pressed from '../images/LED_on_pressed.png';

const description = {
    LED_on : 'Firstly, the green light you see on the picture indicates the availability of the washing machine. Light on means nobody is using it, hence it should be empty.',
    LED_on_pressed : 'Right after pressing the start button on the washing machine, don\'t forget to press the little black button as well. This will update the washer\'s status on the website',
    LED_off : 'Immediately after you press the button, you should see the green light is now off. This tells you that there is an on-going washing cycle.',
    LED_off_pressed : 'When you are about to pick your clothes up, don\'t forget to click on the button again. It again changes the washer\'s status so its availablity can be seen on the website'
}

const style = {
    container : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-evenly',
    },
    title : {
        fontSize : '1em'
    }
}

class Instructions extends React.Component{
    render(){
        return (
            <div style={style.container}>
                <h1 style={style.title}>2. User Guide</h1>
                <InstructionCard image={LED_on} description={description.LED_on}/>
                <InstructionCard image={LED_on_pressed} description={description.LED_on_pressed}/>
                <InstructionCard image={LED_off} description={description.LED_off}/>
                <InstructionCard image={LED_off_pressed} description={description.LED_off_pressed}/>
            </div>
        );
    }
}

export default Instructions;