import React,{useState,useRef,useEffect} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_em0pn38', 'template_rk03d2l', form.current, 'y4eLtXa2dkZBzDNLc')
      .then((result) => {
        setStatus('Message sent successfully!');
        form.current.reset();
        setTimeout(() => setStatus(''), 2000); // Clear message after 2 seconds
      }, (error) => {
        setStatus('Failed to send message. Please try again.');
        console.error(error.text);
        setTimeout(() => setStatus(''), 2000); // Clear message after 2 seconds
      });
  };
  
  return (
    <section id="contact" className="contact section light-background">


      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Have a question or ready to begin your yoga journey? Feel free to reach out — I'm here to guide you every step of the way!</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-5">

            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Meet nagar, East gokulpur, Delhi-110094</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p><a href="tel:+917827865868" className="linksCOlor">+91 7827865868</a></p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p><a href="mailto:nishkarshjangid64278@gmail.com" className="linksCOlor">nishkarshjangid64278@gmail.com</a></p>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps?q=Meet+Nagar,+East+Gokulpur,+Delhi-110094&output=embed"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '270px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="col-lg-7">
            <form ref={form} onSubmit={sendEmail} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email-field" required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject-field" required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea className="form-control" name="message" rows="10" id="message-field" required></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit">Send Message</button>
                  {status && <p className="mt-2">{status}</p>}
                </div>
              </div>
            </form>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;
