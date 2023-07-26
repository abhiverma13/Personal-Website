import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  useEffect(() => {
    document.title = "Abhi Verma - Contact Me";
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oyem80q', 'template_yqi8u61', form.current, '_2x4APNGu3ktb-okL')
      .then((result) => {
          console.log(result.text);
          window.location.reload(true);
      }, (error) => {
          console.log(error.text);
      })
  };

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      if(event.target.value==='') {
        setError(null);
      }
      else {
        setError('Email is invalid');
      }
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  return (
    <div className="contactme">
      <div className="getintouch">
        <h1>Get in Touch.</h1>
        <p>Feel free to reach out to me using the form on the right. My LinkedIn, Instagram and email are also located at the bottom of the page.</p>
      </div>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="formlabel">
          <label>Name</label>
        </div>
        <div className="formsection">
          <input type="text" name="user_name" />
        </div>
        <div className="formlabel">
          <label>Email</label>
        </div>
        <div className="formsection">
          <input type="email" name="user_email" value={email} onChange={handleChange}/>
        </div>
        <div className="formlabel">
          <label>Message</label>
        </div>
        <div className="formsection">
          <textarea name="message" />
        </div>
        <div className={error ? "error" : "placeholder"}>Enter a valid email</div>
        <div className="submitsection">
          <input className="submit" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}
 
export default ContactMe;