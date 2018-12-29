import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';
import UserPanel from './UserPanel';

class SidePanel extends Component {
    render() {
        const {currentUser, photoURL} = this.props
        return (
            <Menu
                size="large"
                inverted
                fixed="left"
                vertical
                style={{backgroundColor: "#4c3c4c", fontSize: "1.2rem"}}
            >
                <UserPanel currentUser={currentUser} photoURL={photoURL} />
            </Menu>
        )
    }
}

export default SidePanel;