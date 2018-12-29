import React from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';
import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';
import {connect} from 'react-redux';

const App = (props) => {
    return (
        <Grid column="equal" className="app" style={{backgroundColor: "#eee"}}>
            <ColorPanel />
            <SidePanel currentUser={props.currentUser.displayName /* 3Й подход получения имени пользователя в выпдающем меню */} />
            <Grid.Column style={{marginLeft: 320}}>
                <Messages />
            </Grid.Column>
            <Grid.Column width={4}>
                <MetaPanel />
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    };
}

export default connect(mapStateToProps, {})(App);
