import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth';

class Login extends Component {
    render() {
        return (
            <div>
                <button className="btn green" onClick={this.props.login}>Login</button>
            </div>
        )
    }
}



export default connect(null, login)(Login);