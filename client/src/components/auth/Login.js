import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import classnames from 'classnames';
import {loginUser} from '../../actions/authActions';
import "./Login.css";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      errors: {},
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push("/dashboard")
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    if(nextProps.errors){
      this.setState({errors: nextProps.errors})
    }
  }

  onChange(e){
    this.setState({ [e.target.name] : e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    const newObject = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(newObject);
    this.props.loginUser(newObject);
  }
  render() {
    const {errors} = this.state;
    return (
      <div className="login-form mt-5 mb-5">
        <form noValidate onSubmit={this.onSubmit}>
          <h4 className="modal-title">Login</h4>
          <div className="form-group">
            <input
              type="email"
              className={classnames("form-control", {
                "is-invalid": errors.email
              })}
              placeholder="Email"
              required="required"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>
          <div className="form-group">
            <input
              type="password"
              className={classnames("form-control", {
                "is-invalid": errors.password
              })}
              placeholder="Password"
              required="required"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <div className="invalid-feedback">{errors.password}</div>
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
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {loginUser})(Login);
