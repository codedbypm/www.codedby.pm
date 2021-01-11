import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";

function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [error, setError] = useState(false);
  const [outcome, setOutcome] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.name) {
      setError(true);
      setOutcome("Name is required");
    } else if (!formdata.email) {
      setError(true);
      setOutcome("Email is required");
    } else if (!formdata.subject) {
      setError(true);
      setOutcome("Subject is required");
    } else if (!formdata.message) {
      setError(true);
      setOutcome("Message is required");
    } else {
      const form = new FormData()
      form.append("name", formdata.name)
      form.append("email", formdata.email)
      form.append("subject", formdata.subject)
      form.append("message", formdata.message)

      fetch("https://europe-west1-codedby-pm.cloudfunctions.net/send-email", {
        method: 'POST',
        body: form
      })
      .then(function(response) {
        setError(false)
        setOutcome("You message has been sent!!!") 
      })
      .catch(error => {
        setError(true)
        setOutcome("Error while sending message")
      })
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && outcome) {
      return <div className="alert alert-danger mt-4">{outcome}</div>;
    } else if (!error && outcome) {
      return <div className="alert alert-success mt-4">{outcome}</div>;
    } else {
      return null;
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Get in Touch" />

        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Let's talk about everything!</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p>
                  Don't like forms? Send me an{" "}
                  <a href="mailto:paolo@codedby.pm">email</a> instead.
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="col-md-8">
            <form
              id="contact-form"
              className="contact-form mt-6"
              onSubmit={submitHandler}
            >
              <div className="row">
                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="InputName"
                      placeholder="Your name"
                      onChange={handleChange}
                      value={formdata.name}
                    />
                  </div>
                </div>

                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      name="email"
                      placeholder="Email address"
                      onChange={handleChange}
                      value={formdata.email}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="InputSubject"
                      name="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      value={formdata.subject}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="InputMessage"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                      onChange={handleChange}
                      value={formdata.message}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                name="submit"
                id="submit"
                value="Submit"
                className="btn btn-default"
              >
                Send Message
              </button>
            </form>
            {handleAlerts()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
