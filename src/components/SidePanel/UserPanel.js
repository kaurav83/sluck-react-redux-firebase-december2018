import React, { Component } from 'react';
import { Grid, Header, Icon, Dropdown, Image } from 'semantic-ui-react';
import firebase from '../../firebase';

class UserPanel extends Component {
    state = {
        user: this.props.currentUser
    }

    dropdownOptions = () => [
        {
            key: 'user',
            text: (
                <span>
                    Signed in as <strong>{this.state.user}</strong>
                </span>
            )
        },
        {
            key: 'avatar',
            text: <span>Change Avatar</span>
        },
        {
            key: 'signout',
            text: <span onClick={this.handleSignout}>Sign Out</span>
        }
    ];

    handleSignout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => console.log('signed out!'));
    }

    render() {
        return (
            <Grid style={{ backgroundColor: "#4c3c4c" }}>
                <Grid.Column>
                    <Grid.Row style={{ padding: "1.2rem", margin: 0 }}>
                        <Header inverted floated="left" as="h2">
                            <Icon name="code" />
                            <Header.Content>
                                DevChat
                            </Header.Content>
                        </Header>
                    </Grid.Row>

                    {/* User Dropdown */}
                    <Header style={{ padding: '.25rem' }} as="h4" inverted>
                        <Dropdown 
                            trigger={
                                <span>
                                    <Image 
                                        src={this.props.photoURL}
                                        spaced="right"
                                        avatar
                                    />
                                    {this.state.user}
                                </span>
                            } 
                            options={this.dropdownOptions()}
                        />
                    </Header>
                </Grid.Column>
            </Grid>
        )
    }
}


export default UserPanel;