import { assests } from "../../assets/assets";
import './footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h2 className="logo-name">Yummie</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorum velit asperiores ipsum saepe, sunt, laborum animi molestias excepturi, quidem at ad ratione. Numquam, nemo obcaecati tempore quis error est.
        <div className="footer-icons">
          <img src={assests.facebook_icon}/>
          <img src={assests.twitter_icon}/>
          <img src={assests.linkedin_icon}/>
        </div>
        </div>
        <div className="footer-center">
          <h2>COMPANY</h2>
        <li>home</li>
        <li>about us</li>
        <li>Delivery</li>
        <li>privacy policy</li>
        </div>
        <div className="footer-right">
        <h2>
          GET IN TOUCH
        </h2>
        <p>
          +1-902-891-01
        </p>
        <p>yummi@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer;
