import React from "react";

const SubmitHandler = (e) => {
  e.preventDefault();
};

const Subscribe = (props) => {
  return (
    <section
      className={`wpo-subscribe-section section-padding ${props.sbClass}`}
    >
      <div className="container">
        <div className="wpo-subscribe-wrap">
          <div className="subscribe-text">
            <h3>Ready to Get Started with Fincasa Capital ?</h3>
          </div>
          <div className="subscribe-form">
            <form onSubmit={SubmitHandler}>
              <div className="input-field">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Get Started</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
