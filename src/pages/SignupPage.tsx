import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Input from '../components/Auth/Input';
import Button from '../components/Auth/Button';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const isValidEmail = email.includes('@');
    const isValidPassword = password.length >= 8;

    const handleSignUp = async () => {
        if (isValidEmail && isValidPassword) {
            try {
                const response = await axios.post('https://www.pre-onboarding-selection-task.shop/auth/signup', {
                    email,
                    password,
                });

                if (response.status === 201) {
                    navigate('/signin');
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            navigate('/todo');
        }
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">회원가입</h2>
                </div>
                <div className="flex flex-col space-y-4">
                    <Input type="email" testId="email-input" value={email} onChange={e => setEmail(e.target.value)} />
                    <Input type="password" testId="password-input" value={password} onChange={e => setPassword(e.target.value)} />
                    <Button testId="signup-button" text="회원가입" onClick={handleSignUp} disabled={!isValidEmail || !isValidPassword} />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
