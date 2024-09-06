import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';  
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formType, setFormType] = useState<'login' | 'forgot' | 'register'>('login');
  const { setUser, signInWithGoogle, forgotPassword, loginWithEmailAndPassword } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const autoLoginData = localStorage.getItem('autoLogin');
    if (autoLoginData) {
      const { email, password } = JSON.parse(autoLoginData);
      handleLoginWithCredentials(email, password);
      localStorage.removeItem('autoLogin');
    }
  }, []);

  const handleLoginWithCredentials = async (email: string, password: string) => {
    try {
      await loginWithEmailAndPassword(email, password);
      setUser({email});
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/courses');
    } catch (error:any) {
      console.error('Error during auto login:', error);
      alert(`Error during auto login: ${error.message}`);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      await handleLoginWithCredentials(email, password);
    } else {
      alert('Please enter both email and password.');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        if (user) {
          alert('Registration successful! Please log in.');
          setFormType('login')
        }
      } 
      
      catch (error:any) {
        if (error.code === 'auth/email-already-in-use') {
          alert('The email address is already in use. Please use a different email.');
        } else if (error.code === 'auth/weak-password') {
          alert('Password should be at least 6 characters.');
        } else {
          console.error('Error during registration:', error);
          // alert(`Error during registration: ${error.message}`);
        }
      }
    } else {
      alert('Please enter both email and password to register.');
    }
  };
  
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== '') {
      try {
        await forgotPassword(email);
        alert('Password reset email sent!');
        setFormType('login');
      } catch (error:any) {
        console.error('Error during password reset:', error);
        alert(`Error during password reset: ${error.message}`);
      }
    } else {
      alert('Please enter your email to reset your password.');
    }
  };

  return (
    <div className="login">
      <form
        className="login__form"
        onSubmit={formType === 'login' ? handleLogin : formType === 'forgot' ? handleForgotPassword : handleRegister}
      >
        <h1 className="login__title">
          {formType === 'login' ? 'Login' : formType === 'forgot' ? 'Forgot Password' : 'Register'}
        </h1>

        <div className="login__content">
          <div className="login__box">
            <i className="ri-user-3-line login__icon"></i>
            <div className="login__box-input">
              <input
                type="email"
                required
                className="login__input"
                id="login-email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="login-email" className="login__label">Email</label>
            </div>
          </div>
          {formType !== 'forgot' && (
            <div className="login__box">
              <i className="ri-lock-2-line login__icon"></i>
              <div className="login__box-input">
                <input
                  type="password"
                  required
                  className="login__input"
                  id="login-pass"
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="login-pass" className="login__label">Password</label>
              </div>
            </div>
          )}
        </div>

        {formType === 'login' && (
          <>
            <div className="login__check">
              <a href="#" className="login__forgot" onClick={() => setFormType('forgot')}>Forgot Password?</a>
            </div>
          </>
        )}

        <button type="submit" className="login__button">
          {formType === 'login' ? 'Login' : formType === 'forgot' ? 'Submit' : 'Register'}
        </button>

        {formType === 'login' && (
          <div className="login__register">
            <p>
              Don't have an account? <a href="#" onClick={() => setFormType('register')}>Register</a>
            </p>
            <button
              style={{ width: '50%', display: 'flex', marginLeft: '25%' }}
              type="button"
              className="google-login-button"
              onClick={signInWithGoogle}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6WwgH7Nl5_AW9nDCnR2Ozb_AU3rkIbSJdAg&s"
                style={{ width: '10%', height: '10%' }}
                alt="Sign in with Google"
                className="google-logo"
              />
              <span>Sign in with Google</span>
            </button>
          </div>
        )}

        {formType !== 'login' && (
          <p className="login__register">
            <a href="#" onClick={() => setFormType('login')}>Back to Login</a>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
