import React, { Component } from 'react';
import {Form, Row, Jumbotron, FormGroup, FormControl, Col, ControlLabel, Button, Alert} from 'react-bootstrap';
//import firebase from './firebase';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            error: undefined
        }
    }
    onRegister = (e) => {
        e.preventDefault();
        let errorMsg = [];
        if(!this.state.email){
            errorMsg.push("Email is not valid");
        }
        if(!this.state.password || this.state.password !== this.state.confirmPassword){
            errorMsg.push("Password is not matched/valid");
        }
        if(errorMsg){
            this.setState({
                error: errorMsg.join(' and ')
            });
            return;
        }
        /*firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => this.setState({
            error: "Error while register new user. Please try after sometime!!"
        }));*/
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
    onConfirmPasswordChange = (e) => {
        this.setState({
            confirmPassword: e.target.value
        })
    }
    render() {
        const {error, email, password, confirmPassword} = this.state;
        return (
            <Row>
                <Col md={6} mdOffset={3}>
                    {
                        error && <Alert bsStyle="warning" className="content" onDismiss={this.handleAlertDismiss}>
                        <strong>Register Error:  </strong> {error}
                        </Alert>
                    }
                    <Jumbotron className="content">
                        <Form horizontal onSubmit={this.onRegister}>
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
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="Confirm Password" value={confirmPassword} onChange={this.onConfirmPasswordChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button bsStyle="success" type="submit">
                                        Register
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

export default Register;