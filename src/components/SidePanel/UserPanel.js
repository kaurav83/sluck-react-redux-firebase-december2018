import React, { Component } from 'react';
import { Grid, Header, Icon, Dropdown } from 'semantic-ui-react';
<<<<<<< HEAD
import firebase from '../../firebase';
=======
>>>>>>> 7496efae09c4cddf093987458d740655571a93c6

class UserPanel extends Component {
    dropdownOptions = () => [
        {
            key: 'user',
            text: <span>Signed in as <strong>User</strong></span>,
            disabled: true
        },
        {
            key: 'avatar',
            text: <span>Change Avatar</span>
        },
        {
            key: 'signout',
<<<<<<< HEAD
            text: <span onClick={this.handleSignout}>Sign Out</span>
        }
    ];

    handleSignout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => console.log('signed out!'));
    }
=======
            text: <span>Sign Out</span>
        }
    ]
>>>>>>> 7496efae09c4cddf093987458d740655571a93c6

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
                        <Dropdown trigger={
                            <span>User</span>
                        } options={this.dropdownOptions()}
                        />
                    </Header>
                </Grid.Column>
            </Grid>
        )
    }
}

export default UserPanel;