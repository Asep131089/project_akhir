import React from "react";
import { Container } from "react-bootstrap";

function ContactUs() {
  return (
    <Container>
      <div>
        <section className="py-2 bg-info">
          <div className="container">
            <div className="row">
              <div className="col-md-6 " >
                <h5>Contact Us</h5>
              </div>
              <div className="col-md-6 my-auto ">
                <h6 className="float-end">PizzaKangAsep / Contact Us</h6>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="=container">
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h6>Contact Form</h6>
                    {/* <hr/> ini adalah garis  */}
                    <hr />
                    <div className="form-group">
                      <label className="mb-1">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Email Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Address"
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Message</label>
                      <textarea
                        rows="3"
                        className="form-control"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                    <div className="form-group py-6 ">
                      <button
                        type="button"
                        className="btn btn-primary shadow mt-4 col-md-12"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5 className="main-handing mb-2">Address Information</h5>
                    {/* <div className="underline" style={{ borderBottomWidth: '2px' }}></div> */}
                    <div
                      className="underline"
                      style={{
                        borderBottomWidth: "5px ",
                        borderBottomStyle: "solid",
                        borderBottomColor: "red",
                        maxWidth: "400px",
                      }}
                    ></div>
                    <p className="mb-1">
                      PizzaKangAsep Jl. Raya Pejuangan Melati Kebon jeruk,
                      Jakarta
                    </p>
                    <p className="mb-1">Tlp. 021-5367456 / 0878 8614 2638</p>
                    <p className="mt-1">Email: PizzaKangAsep@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

export default ContactUs;
