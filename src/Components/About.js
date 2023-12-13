import React from "react";

export default function About() {
  return (
    <>
      {/* <div className="top">
        <div className="bio">
          <a href="http://">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BIO
          </a>
          <a href="http://">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Portfolio
          </a>
          <a href="http://">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;podcast
          </a>
          <a href="http://">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;blog
          </a>
        </div>
      </div> */}
      {/* style={{color:'red'}} */}
      {/* <div className="main">
        <div className="main1">
          <h1 className="bj">Bethany jones</h1>
          <p className="p1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
            eum? Necessitatibus nostrum ducimus quia esse veritatis officia
            voluptates earum inventore.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="p2">areallygreatsite</p>
          <br />
          <i className="fa-brands fa-instagram"></i>
          &nbsp;&nbsp;&nbsp;<i className="fa-brands fa-facebook"></i>
          &nbsp;&nbsp;&nbsp;<i className="fa-brands fa-twitter"></i>
          &nbsp;&nbsp;&nbsp;<i className="fa-brands fa-linkedin"></i>
        </div>
        <div className="main2">
          <img className="hero" src="hero-img.png" alt="" />
        </div>
      </div> */}
      <div className="container mt-3">
        <div className="card " id="one">
          <img
            className="card-img-top rounded-circle"
            src="banner-01.png"
            alt="Card image"
          />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
