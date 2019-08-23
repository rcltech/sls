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
        width : '100%',
        margin: 'auto',
    },
    titleStyle : {
        fontSize : '1.5em'
    }
}

const data = {
    utkarsh : {
        name : 'Utkarsh Goel',
        image : utkarsh,
        role : 'Electronics engineer & Full-stack developer'
    },
    sean : {
        name : 'Sean Chok',
        image : sean,
        role : 'Hardware engineer & Front-end developer'
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
    },
    waqas : {
        name : 'Waqas Ali',
        image : waqas,
        role : 'External contributor'
    },
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
                <h1 style={style.titleStyle}>Our Team</h1>
                {createMember(data)}
            </div>
        );
    }
}

export default Members;
