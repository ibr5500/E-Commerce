import React from 'react';
// import { Link } from 'react-router-dom';
import { MdOutlineCall } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { HiOutlineUser } from 'react-icons/hi';

const Navbar = () => (
  <header className="m-2 px-5 py-3">
    <div className="navbar-1 d-flex flex-row justify-content-between">
      <div>
        <MdOutlineCall />
        +022 319 821 967
      </div>
      <img
        src="./Group.png"
        alt="logo ipsum"
      />
      <div className="d-flex">
        <div className="px-2">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            Fb
          </a>
        </div>
        <div className="px-2">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            Tw
          </a>
        </div>
        <div className="px-2">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            Ig
          </a>
        </div>
        <div className="px-2">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            Yt
          </a>
        </div>
      </div>
    </div>
    <div className="d-flex flex-row justify-content-between my-4">
      <nav>
        <a
          href="/"
          className="text-decoration-none px-2"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-decoration-none px-2"
        >
          About
        </a>
        <a
          href="/faq"
          className="text-decoration-none px-2"
        >
          FAQ
        </a>
        <a
          href="/blog"
          className="text-decoration-none px-2"
        >
          Blog
        </a>
      </nav>
      <div>
        <FaRegHeart />
        <FiShoppingCart />
        <HiOutlineUser />
      </div>
    </div>
  </header>
);

export default Navbar;
