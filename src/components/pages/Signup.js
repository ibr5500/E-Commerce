import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewUser } from '../../redux/users/userSlice';

const Signup = () => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: '',
    },
    address: {
      city: '',
      street: '',
      number: '',
      zipcode: '',
      geolocation: {
        lat: '',
        long: '',
      },
    },
    phone: '',
  });

  const dispach = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(e);

    dispach(createNewUser({ ...user }));

    if (user.username && user.password) {
      setTimeout(() => {
        alert(`User Created suceessfully! for ${user.username}`);
      }, 2000);
    } else {
      alert('Please fill up all the fileds !!'); // eslint-disable-line no-alert
      return;
    }

    setUser({
      email: '',
      username: '',
      password: '',
      name: {
        firstname: '',
        lastname: '',
      },
      address: {
        city: '',
        street: '',
        number: '',
        zipcode: '',
        geolocation: {
          lat: '',
          long: '',
        },
      },
      phone: '',
    });
  };

  return (
    <div>
      Signup
      <form onSubmit={handleSubmit}>
        <div className="input-floor">
          <label
            htmlFor="name-input"
            className="w-100 my-2"
          >
            <input
              id="fname-input"
              className="form-control py-2  px-4 "
              type="text"
              value={user.name.firstname}
              onChange={(e) => setUser({ ...user.name, firstname: e.target.value })}
              placeholder="First Name"
            />
            <input
              id="lname-input"
              className="form-control py-2  px-4 "
              type="text"
              value={user.name.lastname}
              onChange={(e) => setUser({ ...user.name, lastname: e.target.value })}
              placeholder="Last Name"
            />
          </label>
          <label
            htmlFor="email-input"
            className="w-100 my-2"
          >
            <input
              id="email-input"
              className="form-control py-2  px-4 "
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
            />
          </label>
          <label
            htmlFor="address-input"
            className="w-100 my-2"
          >
            <input
              id="city-input"
              className="form-control py-2  px-4 "
              type="text"
              value={user.city}
              onChange={(e) => setUser({ ...user.address, city: e.target.value })}
              placeholder="City"
            />
            <input
              id="street-input"
              className="form-control py-2  px-4 "
              type="text"
              value={user.street}
              onChange={(e) => setUser({ ...user.address, street: e.target.value })}
              placeholder="Street"
            />
            <input
              id="number-input"
              className="form-control py-2  px-4 "
              type="number"
              value={user.street}
              onChange={(e) => setUser({ ...user.address, number: e.target.value })}
              placeholder="Building number"
            />
            <input
              id="zipcode-input"
              className="form-control py-2  px-4 "
              type="text"
              value={user.zipcode}
              onChange={(e) => setUser({ ...user.address, zipcode: e.target.value })}
              placeholder="Zip Code"
            />
          </label>
          <label
            htmlFor="phone-input"
            className="w-100 my-2"
          >
            <input
              id="phone-input"
              className="form-control py-2  px-4 "
              type="tel"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              placeholder="Phone"
            />
          </label>
          <label
            htmlFor="username-input"
            className="w-100 my-2"
          >
            <input
              id="username-input"
              className="form-control py-2  px-4 "
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="UserName"
            />
          </label>
          <label
            htmlFor="password-input"
            className="w-100 my-2"
          >
            <input
              id="password-input"
              className="form-control py-2  px-4 "
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Password"
            />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
