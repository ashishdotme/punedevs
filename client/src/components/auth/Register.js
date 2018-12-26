import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {registerUser} from '../../actions/authActions';
import "./Register.css";

class Register extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    console.log(newUser);
    this.props.registerUser(newUser);
  }

  render() {
    const user = this.props.auth.user;
    return (
      <div className="login-form mt-5 mb-5">
       {user? user.name : null}
        <form onSubmit={this.onSubmit}>
          <h4 className="modal-title">Register</h4>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              required="required"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required="required"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              required="required"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group small clearfix">
            <label className="checkbox-inline">
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <input
            type="submit"
            className="btn btn-primary btn-block btn-lg"
            value="Login"
          />
        </form>
        <div className="text-center small">
          Alread have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {registerUser})(Register);
