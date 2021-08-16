import "./Footer.css";
import { Input } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

export default function Footer() {

    const toTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="about-us">
                    <h2>About us</h2>
                    <p>
                        Team Technocrats Robotics is the official Robotics team under the
                        aegis of VIT University, Chennai, comprising of the most driven,
                        focused, and technologically inclined individuals belonging to a
                        multitude of engineering backgrounds, whose common passion and
                        expertise for robotics and automation brings them together.
                    </p>
                </div>
                <div className="newsletter">
                    <h2>Newsletter</h2>
                    <p>Stay update with our latest</p>
                    <div className="form-element">
                        <Input placeholder="Email" id="formEmail" />
                    </div>
                </div>
                <div className="location">
                    <h2>Find Us At</h2>
                    <iframe
                        title="..."
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040704935959!2d80.15123961413394!3d12.840646221214108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Chennai!5e0!3m2!1sen!2sin!4v1628483716847!5m2!1sen!2sin"
                        width="300"
                        height="250"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
                <div className="follow">
                    <h2>Follow Us</h2>
                    <p>Let us be Social</p>
                    <div className="followIcons">
                        <a href="https://www.instagram.com/technocratsrobotics/">
                            <InstagramIcon
                                color="primary"
                                fontSize="large"
                                style={{ marginRight: "1rem" }}
                            />
                        </a>
                        <a href="https://www.facebook.com/technocratsrobotics/">
                            <FacebookIcon
                                color="primary"
                                fontSize="large"
                                style={{ marginRight: "1rem" }}
                            />
                        </a>
                        <a href="https://www.linkedin.com/company/technocrats-robotics-vit">
                            <LinkedInIcon
                                color="primary"
                                fontSize="large"
                                style={{ marginRight: "1rem" }}
                            />
                        </a>
                        <a href="https://twitter.com/technocratsr">
                            <TwitterIcon color="primary" fontSize="large" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="rights">
                <h4 className="text-gray">
                    Copyright ©2019 All rights reserved |{" "}
                    <strong>TechnocratsRobotics.in</strong>
                </h4>
            </div>
            <div className="move-up">
                <ArrowUpwardIcon color="primary" fontSize="large" onClick={toTop}/>
            </div>
        </footer>
    );
}
