import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import base64 from 'base-64';

import { loginUser } from '../../../actions/index';
// import config from '../config';

import './styles.scss';

const Login = ({ logIn }) => {
  const [form, setForm] = useState({});

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    logIn(form, '/board');
  };

  return (
    <main className="login">
      <div className="login-form">
        <h1>Inicia Session</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-form">
            <input type="text" name="email" placeholder="Correo" onChange={handleInput} />
          </div>
          <div className="input-form">
            <input type="password" name="password" placeholder="Contraseña" onChange={handleInput} />
          </div>
          <div>
            <input type="submit" className="btn btn-primary" value="entar" />
          </div>
        </form>
      </div>
    </main>
  );
};

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = {
  logIn: loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
