import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8  shadow-md">
      <div className="container mx-auto  flex flex-col md:flex-row justify-between items-start gap-3">
        <div className="md:w-1/3  space-y-2 items-center">
          <h1 className={`text-3xl  font-bold italic ${styles.italianFont}`}>VOITURE</h1>
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* fake location */}
        <div className="md:w-1/3 w-full">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.6562218096363!2d31.210932775423305!3d30.025496974928598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d5c2c9b16b3%3A0x842c4dd4a1e52862!2sCairo%20University!5e0!3m2!1sen!2seg!4v1719062097086!5m2!1sen!2seg"
            width="100%"
            height="200"
            className="rounded-xl shadow"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right: Contact */}
        <div className="md:w-1/3 text-sm text-gray-300 space-y-2 text-right mr-20">

          <p><span className="font-semibold text-white"></span> <FontAwesomeIcon icon={faPhone} /> (+20) 102-343-344</p>

          <p><span className="font-semibold text-white "></span> <FontAwesomeIcon icon={faEnvelope} /> info@voiture.com</p>

          <p className='pr-9'><span className="font-semibold text-white"></span> <FontAwesomeIcon icon={faLocation} /> Cairo, Egypt</p>


        </div>
      </div>
      {/* social media */}
      <div className='container mx-auto mt-7'>
        <ul className='flex flex-row gap-3 justify-center '>
          <li> <Link to="https://www.facebook.com" target='_blank'><FontAwesomeIcon icon={faFacebook} /></Link></li>
          <li><Link to="https://www.tiktok.com" target='_blank'><FontAwesomeIcon icon={faTiktok} /></Link></li>
          <li><Link to="https://www.youtube.com" target='_blank'><FontAwesomeIcon icon={faYoutube} /></Link></li>
          <li><Link to="https://www.instagram.com" target='_blank'><FontAwesomeIcon icon={faInstagram} /></Link></li>
          <li><Link to="https://www.linkedin.com" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
          <li><Link to="https://www.twitter.com" target='_blank'><FontAwesomeIcon icon={faTwitter} /></Link></li>
        </ul>
      </div>
    </footer>
  );
}
