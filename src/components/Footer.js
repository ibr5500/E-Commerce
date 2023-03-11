import React from 'react';
import { VscLocation, VscMail } from 'react-icons/vsc';
import { MdOutlineCall } from 'react-icons/md';

const Footer = () => (
  <footer className="footer d-flex flex-row p-5 mt-3">
    <div>
      <img
        src="./Group2.png"
        alt="logo ipsum"
      />
      <p>
        OurStudio is a digital agency UI / UX Design and Website Development located in Ohio, United
        States of America
      </p>
      <p>Copyright Tanah Air Studio</p>
    </div>
    <div className="d-flex flex-row">
      <div className="ps-3">
        <h6>Our Social Media</h6>
        <div className="px-2 text-start">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            FaceBook
          </a>
        </div>
        <div className="px-2 text-start">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            Twitter
          </a>
        </div>
        <div className="px-2 text-start">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            Instagram
          </a>
        </div>
        <div className="px-2 text-start">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            YouTube
          </a>
        </div>
      </div>
      <div className="ps-3 text-start">
        <h6>Contact</h6>
        <div className="d-flex flex-row py-2">
          <VscLocation className="m-2" />
          <div>
            8819 Ohio St. South Gate,
            <br />
            California 90280
          </div>
        </div>
        <div className="d-flex flex-row py-2">
          <VscMail className="m-2" />
          <div>ourstudio@hello.com</div>
        </div>
        <div className="d-flex flex-row py-2">
          <MdOutlineCall className="m-2" />
          <div>+271 386-647-3637</div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
