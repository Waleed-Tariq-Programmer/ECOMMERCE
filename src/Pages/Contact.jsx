import React, { useContext, useState, useRef } from "react";
import "../App.css";
import { AuthContext } from "../Context/AuthContex";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { currentUser } = useContext(AuthContext);

  const [contact, setContact] = useState({
    name: currentUser ? currentUser.displayName : "",
    email: currentUser ? currentUser.email : "",
    subject: "",
    message: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const submitContact = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_hp8kal2', 'template_6bogfum', form.current, 'tmflXp2DBsLIi3UJl', {
        from_name: "Waleed from Ecommerce",
        to_name: contact.name,
        message: contact.message,
        reply_to: contact.email,
        subject: contact.subject,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setContact({
            name: currentUser ? currentUser.displayName : "",
              email: currentUser ? currentUser.email : "",
              subject: "",
              message: "",
          })
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          <div className="col-lg-12">
            <form ref={form} className="form-contact contact_form" noValidate onSubmit={submitContact}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100"
                      name="message"
                      cols="30"
                      rows="9"
                      placeholder="Enter Message"
                      onChange={handleChange}
                      value={contact.message}
                    ></textarea>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control valid"
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      onChange={handleChange}
                      value={contact.name}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control valid"
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      value={contact.email}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Subject"
                      name="subject"
                      onChange={handleChange}
                      value={contact.subject}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button
                  type="submit"
                  className="button button-contactForm boxed-btn"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
