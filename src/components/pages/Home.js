import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const Home = () => (
  <div className="home mx-3">
    <div className="d-flex flex-row">
      <div className="container-1 text-start row align-items-center m-5 p-4">
        <h2 className="fw-bold">
          Sort out Your
          <br />
          Spring Look
        </h2>
        <p>We will help to develop every smallest thing into a big one for your company.</p>
        <button
          className="shop-btn btn px-3 py-2 ms-2 text-start"
          type="button"
          onClick={() => console.log('Shop!!')}
        >
          Shop
          <MdOutlineArrowForwardIos className="ms-1" />
        </button>
      </div>
      <div className="container-2 d-flex flex-row">
        <img
          src="./Image.png"
          alt="cardimg"
          className="home-image px-2"
        />
        <img
          src="./Image.png"
          alt="cardimg"
          className="home-image px-2"
        />
      </div>
    </div>
    <div className="cards-container gap-5">
      <div className="position-relative">
        <img
          src="./Image.png"
          alt="category"
          className="cat-img"
        />
        <div className="content position-absolute">
          <h2>Dresses</h2>
          <p className="text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
      <div className="position-relative">
        <img
          src="./Image.png"
          alt="category"
          className="cat-img"
        />
      </div>
      <div className="position-relative">
        <img
          src="./Image.png"
          alt="category"
          className="cat-img"
        />
      </div>
      <div className="position-relative">
        <img
          src="./Image.png"
          alt="category"
          className="cat-img"
        />
      </div>
      <div className="position-relative">
        <img
          src="./Image.png"
          alt="category"
          className="cat-img"
        />
      </div>
      <div className="position-relative">
        <img
          src="./Image.png"
          alt="category"
          className="cat-img"
        />
      </div>
    </div>

    <div className="d-flex flex-row justify-content-between">
      <h2>New Arrival</h2>
      <a
        href="/#"
        className="see-all text-decoration-none"
      >
        See All
      </a>
      <div />
    </div>
  </div>
);

export default Home;
