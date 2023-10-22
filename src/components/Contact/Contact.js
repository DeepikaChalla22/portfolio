import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const notify = () => {
    toast.success("Thanks for Your Interest, I will contact you soon !!", {
      position: "top-right",
    });
  };

  const [showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_33cjeb5",
        "template_z7e737c",
        e.target,
        "w2z9z-oSv8RaO_lcA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <div className="main-container" id="contactme">
      <div className="contactme-container">
        <div className="contactme-parent">
          Have a project in mind
          <h3 className="contactme-heading">Let me Assist You</h3>
        </div>
        <div className="container-parent">
          <div className="container">
            <div className="contactinfo">
              <div className="box">
                <div className="icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p>
                    Proddatur,Kadapa
                    <br />
                    Andhra Pradesh
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="box">
                <div className="icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="text">
                  <h3>Phone</h3>
                  <p>+91 1234567890</p>
                </div>
              </div>

              <div className="box">
                <div className="icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <p>challadeepika2004@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contactform">
              <form action="" onSubmit={sendEmail}>
                <h2>Send Message</h2>

                <div className="inputbox">
                  <input type="text" name="from_name" required="required" />
                  <span>Full Name</span>
                </div>

                <div className="inputbox">
                  <input type="text" name="email" required="required" />
                  <span>Email</span>
                </div>

                <div className="inputbox">
                  <input type="number" name="phone" required="required" />
                  <span>Phone no</span>
                </div>

                <div className="inputbox">
                  <textarea name="message" required="required"></textarea>
                  <span>Your Message..</span>
                </div>

                <div className="inputbox">
                  <input type="submit" onClick={notify} name="" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;