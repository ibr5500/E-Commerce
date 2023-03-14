import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/users/loginSlice';

const Login = () => {
  const dispach = useDispatch();

  const handleSubmit = () => {
    // eslint-disable-next-line
    console.log(
      dispach(
        loginUser({
          username: 'mor_2314',
          password: '83r5^_',
        }),
      ),
    );
  };

  return (
    <div>
      login
      <button
        type="button"
        onClick={() => handleSubmit()}
      >
        login
      </button>
    </div>
  );
};

export default Login;
