import React, { Component } from 'react';
import {Form, Row, FormGroup, Jumbotron, FormControl, Col, ControlLabel, Button, Alert} from 'react-bootstrap';
import firebase from './firebase';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: undefined
        }
    }
    onLogin = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => this.setState({
            error: "Email or Password is not correct!!"
        }));
    }
    onEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleAlertDismiss = () => {
        this.setState({
            error: undefined
        })
    }
    render() {
        const {error, email, password} = this.state;
        return (
            <Row>
                <Col md={6} mdOffset={3}>
                    {
                        error && <Alert bsStyle="warning" className="content" onDismiss={this.handleAlertDismiss}>
                        <strong>Login Error:  </strong> {error}
                        </Alert>
                    }
                    <Jumbotron className="content">
                        <Form horizontal onSubmit={this.onLogin}>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Email" value={email} onChange={this.onEmailChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="Password" value={password} onChange={this.onPasswordChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button bsStyle="success" type="submit">
                                        Sign In
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
        );
    }
}

export default Login;