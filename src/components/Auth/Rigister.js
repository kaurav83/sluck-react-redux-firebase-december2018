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
        passwordConfirm: '',
        errors: [],
    }

    isFormValid = () => {
        let errors = [];
        let error;

        if (this.isFormEmpty(this.state)) {
            error = {message: "Fill in all fields"};
            this.setState({
                errors: errors.concat(error)
            })

            return false;
        } else if (!this.isPasswordValid(this.state)) {
            error = {message: "Password is invalid"};
            this.setState({
                errors: errors.concat(error)
            })

            return false;
        } else {
            return true;
        }
    }

    isFormEmpty = ({username, email, password, passwordConfirm}) => {
        return  !username.length || 
                !email.length || 
                !password.length ||
                !passwordConfirm.length;
    }

    isPasswordValid = ({password, passwordConfirm}) => {
        if (password.length < 6 || passwordConfirm < 6) {
            return false;
        } else if (password !== passwordConfirm) {
            return false;
        } else {
            return true;
        }
    }

    displayErrors = (errors) => {
        return errors.map((error, index) => <p key={index} style={{color: "tomato"}}>{error.message}</p>)
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

        this.isFormValid();
    }

    render() {
        const {username, email, password, passwordConfirm, errors} = this.state;
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
                    {errors.length > 0 && (
                        <Message>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
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