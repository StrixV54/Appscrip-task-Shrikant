import { mettaMuse, quickLinks } from "@/utils/data-constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-section">
        <div className="footer-newsletter">
          <h3 className="footer-newsletter-title">Be the first to know</h3>
          <p className="footer-newsletter-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is
            simply dummy text.
          </p>
          <p className="footer-signup-text">Sign up for updates from mettā muse.</p>
          <div className="footer-email-form">
            <input
              placeholder="Enter your e-mail..."
              className="footer-email-input"
            />
            <button className="footer-subscribe-button">
              Subscribe
            </button>
          </div>
        </div>
        <div className="footer-contact-section">
          <div className="footer-contact-info">
            <h6 className="footer-contact-title">CONTACT US</h6>
            <h6 className="footer-call-us-title">CALL US</h6>
            <div className="footer-contact-details">
              <p>+44 221 133 5360</p>
              <span className="footer-contact-separator">&#9670;</span>
              <p>customercare@mettamuse.com</p>
            </div>
          </div>
          <div className="footer-currency">
            <h6 className="footer-currency-title">Currency</h6>
            <Image className="footer-currency-image" src="/currency.png" height={40} width={90} alt="Currency" />
            <p className="footer-currency-note">
              Transactions will be completed in Euros and a currency reference is available on
              hover.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom-section">
        <div className="footer-column">
          <h6 className="footer-column-title">
            mettā muse
            <Image
              src="/arrow-down-white.png"
              height={20}
              width={20}
              className="footer-dropdown-icon"
              alt="Down Arrow"
            />
          </h6>

          <ul className="footer-column-list">
            {mettaMuse.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-column-title footer-column-title-upper">
            Quick Links
            <Image
              src="/arrow-down-white.png"
              height={20}
              width={20}
              className="footer-dropdown-icon"
              alt="Down Arrow"
            />
          </h3>
          <ul className="footer-column-list">
            {quickLinks.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer-social-section">
          <div className="footer-social-info">
            <h3 className="footer-column-title footer-column-title-upper">
              Follow us
              <Image
                src="/arrow-down-white.png"
                height={20}
                width={20}
                className="footer-dropdown-icon"
                alt="Down Arrow"
              />
            </h3>
            <Image
              src="/socials.png"
              height={50}
              width={100}
              alt="Social Profiles"
              className="footer-social-image"
            />
          </div>
          <div className="footer-payment-section">
            <h3 className="footer-payment-title">mettā muse ACCEPTS</h3>
            <Image className="footer-payment-image" src="/payment-methods.png" height={40} width={400} alt="Payment Methods" />
          </div>
        </div>
      </div>
      <div className="footer-copyright">Copyright © 2023 mettamuse. All rights reserved.</div>
    </footer>
  );
}
