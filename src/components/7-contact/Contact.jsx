import React from 'react'
import './Contact.css'
import Lottie from 'lottie-react'
import contactAnimation from "../../../src/assets/Animation/Animation - 1707181077531 (1).json";
import contactAnimationDark from '../../../src/assets/Animation/Animation - 1707181077531.json'
import { useForm, ValidationError } from "@formspree/react";

  
 /*  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  } */

const Contact = ({theme}) => {

  const [state, handleSubmit] = useForm("xoqogvne");
  return (
    <>
      <section className="contact-us">
        <h1 className="title-section">
          <span className="icon-envelope1" />
         Contact Us
        </h1>
        <p className="sub-title">
          if you have any suggestions, projects, free consultations, or even if
          you want to say “hello”, please fill out the form below and I will
          reply to you shortly.
        </p>

        <div className="flex content">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <label htmlFor="email">Email Address : </label>
              <input required type="email" id="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex" style={{ marginTop: "24px" }}>
              <label htmlFor="message">Your Message : </label>
              <textarea
                required
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button type="submit" className="submit">
              Submit
            </button>

            {state.succeeded && (
              <div>your message has been sent successfully</div>
            )}
          </form>

          <div className="animate">
            <Lottie
              style={{ width: "400px" }}
              animationData={
                theme === "light" ? contactAnimation : contactAnimationDark
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact
