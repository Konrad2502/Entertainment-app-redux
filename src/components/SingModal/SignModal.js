import React, {useState} from 'react';
import './SignModal.scss';
import CircularProgress from '../CircularProgress';

export default function SignModal() {

    const [isLogin, setIsLogin] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [isProgress, setIsProgress] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const toggleLogin = () => {
        setIsLogin(prev => !prev);
        setError("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }
        if (!isLogin && password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setTimeout(() => {
            setIsVisible(false);
            setIsProgress(false);
        }, 3500)

        setIsProgress(true);
    };
    
  return (
    <div className={`${isVisible ? 'sign' : 'sign--close'}`}>
    <div className="sign__logo">
        <img src="/assets/logo.svg" alt="Sign Icon" />
    </div>
    <div className="sign__modal">
        <h2 className="sign__modal-title">
            {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form className="sign__form" onSubmit={handleSubmit}>
            <input 
                className='sign__form-input' 
                type="email" 
                placeholder='Email address' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
            />
            <input 
                className='sign__form-input' 
                type="password" 
                placeholder='Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
            />
            {!isLogin && (
                <input 
                    className='sign__form-input' 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                />
            )}
            {error && <p className="sign__error">{error}</p>}
            <button 
                type="submit"
                className='sign__form-btn'
            >
                {isLogin ? 'Login to your account' : 'Create an account'}
            </button>
        </form>
        <p className="sign__txt">
            {isLogin ? "Don't have an account?" : 'Already have an account'}
            <span 
                onClick={toggleLogin}
                className='sign__txt-span'
            >
                {isLogin ? 'Sign up' : 'Login'}
            </span>
        </p>
    </div>
    {isProgress && <CircularProgress />}
</div>
);
}
