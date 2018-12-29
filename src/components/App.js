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
            <SidePanel 
                currentUser={props.currentUser.displayName} 
                photoURL={props.photoURL}
            />
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
        currentUser: state.user.currentUser,
        photoURL: state.user.currentUser.photoURL
    };
}

export default connect(mapStateToProps, {})(App);
