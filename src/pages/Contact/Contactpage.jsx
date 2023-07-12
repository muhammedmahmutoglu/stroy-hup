import React from "react";
import "./contact-page.css"
import InstagramCard from "../../Components/InstagramCard/InstagramCard";
import Subscribe from "../../Components/Subscribe/Subscribe";

const Contactpage = () => {
  return (
    <div>
      <div className="contact-page">
        <div className="contact-page-header">
          <h1>Contact</h1>
          <p>
            StoryHub theme comes with a contact form built-in. You can use this
            form with Gatsbay Js service and get up to 50 submissions for free
            per form per month. Also, you can easily switch to another service
            if you want.
          </p>
        </div>
        <div className="contact-mail">
           <div className="contact-mail-text">
             <div>
                <h2>Name</h2>
                <input type="text" />
            </div>
            <div>
                <h2>Email</h2>
                <input type="email" />
            </div>
            </div>
            
            <div className="contact-mail-messege">
                <h2>Message</h2>
                <textarea name="massege" id="" ></textarea>
            </div>
            <button className="contact-mail-button">Submit</button>
        </div>
      </div>
      <InstagramCard />
      <Subscribe />

    </div>
  );
};

export default Contactpage;
