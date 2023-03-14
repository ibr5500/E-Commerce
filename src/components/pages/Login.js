import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/users/loginSlice';

const Login = () => {
  const dispach = useDispatch();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault(e);

    const currentUser = {
      user: { ...user },
    };

    dispach(loginUser(currentUser));

    if (user.username && user.password) {
      setTimeout(() => {
        alert('login sucssfull!!');
      }, 2000);
    } else {
      alert('Username or Password cannot be empty !!'); // eslint-disable-line no-alert
      return;
    }
    setUser({
      username: '',
      password: '',
    });
  };

  return (
    <div>
      login
      <form onSubmit={handleSubmit}>
        <div className="input-floor">
          <label
            htmlFor="name-input"
            className="w-100 my-2"
          >
            <input
              id="name-input"
              className="form-control py-2  px-4 "
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="UserName"
            />
          </label>
          <label
            htmlFor="name-input"
            className="w-100 my-2"
          >
            <input
              id="name-input"
              className="form-control py-2  px-4 "
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Password"
            />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
