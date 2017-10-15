import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  setUsername,
  setPassword,
  clearFields,
} from './actions'
import {
  attemptAuthentication,
} from '../Authentication/actions'
import './styles/styles.scss'

class Login extends Component {
  submitLogin = (evt) => {
    evt.preventDefault()
    this.props.attemptAuthentication(this.props.username, this.props.password)
    this.props.clearFields()
    this.props.history.push('/')
  }

  render = () => (
    <div className="Login">
      <form onSubmit={this.submitLogin}>
        <input placeholder='Username' onChange={this.props.setUsername} />
        <input placeholder='Password' onChange={this.props.setPassword} type='password' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
  clearFields: PropTypes.func,
}

const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
})

const mapDispatchToProps = dispatch => ({
  setUsername: (evt) => dispatch(setUsername(evt.target.value)),
  setPassword: (evt) => dispatch(setPassword(evt.target.value)),
  clearFields: () => dispatch(clearFields()),
  attemptAuthentication: (username, password) => dispatch(attemptAuthentication(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
