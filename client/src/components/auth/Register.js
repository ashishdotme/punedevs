import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    const user = this.props.auth.user;
    return (
      <div className="login-form mt-5 mb-5">
        <form className="needs-validation" onSubmit={this.onSubmit} novalidate>
          <h4 className="modal-title">Register</h4>
          <div className="form-group">
            <input
              type="text"
              className={classnames("form-control", {
                "is-invalid": errors.name
              })}
              placeholder="Name"
              required="required"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <div className="invalid-feedback">{errors.name}</div>
          </div>
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
          <div className="form-group">
            <input
              type="password"
              className={classnames("form-control", {
                "is-invalid": errors.password2
              })}
              placeholder="Confirm Password"
              required="required"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
            />
            <div className="invalid-feedback">{errors.password2}</div>
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
