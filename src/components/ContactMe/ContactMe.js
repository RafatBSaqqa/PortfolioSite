import React from "react";
import "./style.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
function ContactMe() {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="assets/images/icons8-email-48.png"
            text="Raafat.saqqa@gmail.com"
          />
          <ContactInfoCard
            iconUrl="assets/images/icons8-github-48.png"
            text="https://github.com/RafatBSaqqa"
          />
        </div>
        <div style={{ flex: 1 }}>
            <ContactForm/>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
