import React, { Component } from 'react';
import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';

class Rigister extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(createdUser => {
                console.log(createdUser);
            })
            .catch(error => console.error(error));
    }

    render() {
        const {username, email, password, passwordConfirm} = this.state;
        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{maxWidth: 450}}>
                    <Header 
                        as="h2"
                        icon
                        color="orange"
                        textAlign="center"
                    >
                        <Icon name="puzzle piece" color="orange" />
                        Register  for DevChat
                    </Header>
                    <Form size="large" onSubmit={this.handleSubmit.bind(this)}>
                        <Segment>
                            <Form.Input
                                fluid
                                name="username"
                                icon="user"
                                iconPosition="left"
                                placeholder="Username"
                                onChange={this.handleChange.bind(this)}
                                type="text"
                                value={username}
                            />
                            <Form.Input
                                fluid
                                name="email"
                                icon="mail"
                                iconPosition="left"
                                placeholder="Email address"
                                onChange={this.handleChange.bind(this)}
                                type="email"
                                value={email}
                            />
                            <Form.Input
                                fluid
                                name="password"
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                onChange={this.handleChange.bind(this)}
                                type="password"
                                value={password}
                            />
                            <Form.Input
                                fluid
                                name="passwordConfirm"
                                icon="repeat"
                                iconPosition="left"
                                placeholder="Confirm password"
                                onChange={this.handleChange.bind(this)}
                                type="password"
                                value={passwordConfirm}
                            />

                            <Button
                                color="orange"
                                fluid
                                size="large"
                            >Submit</Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already a user?
                        <Link to="/login">To login</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Rigister;