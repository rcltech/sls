import React from 'react';
import Member from './Member';
import {map} from 'lodash';
import gela from '../images/team-members/gela.png';
import sean from '../images/team-members/sean.png';
import sid from '../images/team-members/sid.png';
import utkarsh from '../images/team-members/utkarsh.png';
import waqas from '../images/team-members/waqas.png';
import welvin from '../images/team-members/welvin.png';

const style = {
    container : {
        width : 'min(80vw,400px)'
    }
}

const data = {
    utkarsh : {
        name : 'Utkarsh Goel',
        image : utkarsh,
        role : 'Hardware engineer & Full-stack developer'
    },
    sean : {
        name : 'Sean Chok',
        image : sean,
        role : 'Hardware engineer & Front-end developer'
    },
    waqas : {
        name : 'Waqas Ali',
        image : waqas,
        role : 'Back-end developer'
    },
    welvin : {
        name : 'Welvin Bun',
        image : welvin,
        role : 'Front-end developer'
    },
    gela : {
        name : 'Angela Park',
        image : gela,
        role : 'Designer'
    },
    sid : {
        name : 'Siddhant Bagri',
        image : sid,
        role : 'Designer'
    }
}

const createMember = (data) => (
    map(data, (value,key) => (
        <Member key={key} data={value}/>
    ))
);

class Members extends React.Component{
    render(){
        return(
            <div style={style.container}>
                <h3>Our Team</h3>
                {createMember(data)}
            </div>
        );
    }
}

export default Members;