import React from 'react';
import { useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, error] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>

                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <h1>{user?.name}</h1>

                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    {/* <img style={{ width: '30px' }} src={google} alt="" /> */}
                    <p>Google login</p>

                </button>



            </div>
        </div>
    );
};

export default SocialLogin;