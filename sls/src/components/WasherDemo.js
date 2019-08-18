import React from 'react';
import Button from '@material-ui/core/Button';
import available from '../images/available.png';
import unavailable from '../images/unavailable.png';
import { classes } from 'istanbul-lib-coverage';

const style = {
    container : {
        display : 'block'
    },
    image : {
        width : '70%'
    }
}

class WasherDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isAvailable : true
        }
    }

    changeStatus = () => {
        this.setState({
            isAvailable : !this.state.isAvailable
        })
    }

    render(){
        return(
            <div style={style.container}>
                <img src={this.state.isAvailable ? available : unavailable} alt='washer' style={style.image}/>
                <br/>
                <Button variant='contained' color={this.state.isAvailable ? 'secondary':'primary'} className = {classes.button} onClick = {this.changeStatus}>
                    {this.state.isAvailable ? 'Wash' : 'Finish'}
                </Button>
                <p>Press the button to {this.state.isAvailable ? 'wash' : 'finish'}</p>
            </div>
        );
    }
}

export default WasherDemo;