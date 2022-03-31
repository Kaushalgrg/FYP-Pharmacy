import React from 'react'
import { Link } from 'react-router-dom'
import {
  NavDropdown,
  Navbar,
  Nav,
  Container,
  Button,
  Modal,
} from "react-bootstrap";

export default function Home(){
    return(
      <React.Fragment>
      <div className="back-to-top" />
      <header>
      </header>
      <div className="page-hero bg-image overlay-dark" style={{backgroundImage: 'url(../assets/img/bg_image_1.jpg)'}}>
        <div className="hero-section">
          <div className="container text-center wow zoomIn">
            <span className="subhead">Let's make your life happier</span>
            <h1 className="display-4">Healthy Living</h1>
            <Link to = "/doctors"><a className="btn btn-primary">Let's Consult</a></Link>
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="page-section pb-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 py-3 wow fadeInUp">
                <h1>Welcome to Your Health <br /> Center</h1>
                <p className="text-grey mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Accusantium aperiam earum ipsa eius, inventore nemo labore eaque porro consequatur ex aspernatur. Explicabo, excepturi accusantium! Placeat voluptates esse ut optio facilis!</p>
                <Link to = "/about"><a className="btn btn-primary">Learn More</a></Link>
              </div>
              <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
                <div className="img-place custom-img-1">
                  <img src="../assets/img/bg-doctor.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div> {/* .bg-light */}
      </div> {/* .bg-light */}
      <div className="page-section">
        <div className="container">
          <h1 className="text-center wow fadeInUp">Make an Appointment</h1>
          <form className="main-form">
            <div className="row mt-5 ">
              <div className="col-12 col-sm-6 py-2 wow fadeInLeft">
                <input type="text" className="form-control" placeholder="Full name" />
              </div>
              <div className="col-12 col-sm-6 py-2 wow fadeInRight">
                <input type="text" className="form-control" placeholder="Email address.." />
              </div>
              <div className="col-12 col-sm-6 py-2 wow fadeInLeft" data-wow-delay="300ms">
                <input type="date" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 py-2 wow fadeInRight" data-wow-delay="300ms">
                <select name="departement" id="departement" className="custom-select">
                  <option value="general">General Health</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dental">Dental</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopaedics">Orthopaedics</option>
                </select>
              </div>
              <div className="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                <input type="text" className="form-control" placeholder="Number.." />
              </div>
              <div className="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                <textarea name="message" id="message" className="form-control" rows={6} placeholder="Enter message.." defaultValue={""} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 wow zoomIn">Submit Request</button>
          </form>
        </div>
      </div> {/* .page-section */}
        <div className="maps-container wow fadeInUp">
          <a className="map-location__link" href="https://www.google.com/maps/place/OM+Shanti+Chock,+Kathmandu+44600,+Nepal/@27.69091,85.345515,16z/data=!4m5!3m4!1s0x39eb198e309fabe3:0xa343c8fcded81ec7!8m2!3d27.69091!4d85.3455151?hl=en" target="blank">Find us in Google Maps</a>
        </div>
      {/* .banner-home */}
      <footer className="page-footer">
        <div className="container">
          <div className="row px-md-3">
            <div className="col-sm-6 col-lg-3 py-3">
              <h5>Company</h5>
              <ul className="footer-menu">
                    <li><Nav.Link href="/about">About-us</Nav.Link></li>
                    <li><Nav.Link href="/doctors">Doctors</Nav.Link></li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 py-3">
            </div>
            <div className="col-sm-6 col-lg-3 py-3">
              <h5>Our partner</h5>
              <ul className="footer-menu">
                <li><a href="#">One-Fitness</a></li>
                <li><a href="#">One-Drugs</a></li>
                <li><a href="#">One-Live</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 py-3">
              <h5>Contact</h5>
              <p className="footer-link mt-2">Care-U,</p>
              <a href="#" className="footer-link">Nepal</a>
              <a href="#" className="footer-link">healthcare@temporary.net</a>
              <h5 className="mt-3">Social Media</h5>
              <div className="footer-sosmed mt-3">
                <a href="#" target="_blank"><span className="mai-logo-facebook-f" /></a>
                <a href="#" target="_blank"><span className="mai-logo-twitter" /></a>
                <a href="#" target="_blank"><span className="mai-logo-google-plus-g" /></a>
                <a href="#" target="_blank"><span className="mai-logo-instagram" /></a>
                <a href="#" target="_blank"><span className="mai-logo-linkedin" /></a>
              </div>
            </div>
          </div>
          <hr />
          <p id="copyright">Copyright © 2021 <a href="#" target="_blank">Care-u</a>. All right reserved</p>
        </div>
      </footer>
    </React.Fragment>
    )
}