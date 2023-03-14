import React from 'react';
import { useDispatch } from 'react-redux';
import { createNewUser } from '../../redux/users/registerSlice';

const Signup = () => {
  const dispach = useDispatch();

  const handleSubmit = () => {
    // eslint-disable-next-line
    console.log(
      dispach(
        createNewUser({
          email: 'John@gmail.com',
          username: 'johnd',
          password: 'm38rmF$',
          name: {
            firstname: 'John',
            lastname: 'Doe',
          },
          address: {
            city: 'kilcoole',
            street: '7835 new road',
            number: 3,
            zipcode: '12926-3874',
            geolocation: {
              lat: '-37.3159',
              long: '81.1496',
            },
          },
          phone: '1-570-236-7033',
        }),
      ),
    );
  };

  return (
    <div>
      Signup
      <button
        type="button"
        onClick={() => handleSubmit()}
      >
        create user
      </button>
    </div>
  );
};

export default Signup;
