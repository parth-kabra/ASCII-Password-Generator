import React from "react"
import "./Footer.css"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {IconButton} from "@material-ui/core"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
function Footer(){
    return(
        <div className="footer">
            <div className="foot">
                <a href="mailto:baniyannikhil@gmail.com" target="blank"><IconButton><MailOutlineIcon className="mail"/></IconButton></a>
                <a href="https://www.instagram.com/nikhil_0808_/" target="blank"><IconButton><InstagramIcon className="insta"/></IconButton></a>
                <a href="https://www.facebook.com/nikhil.agrawal.12576" target="blank"><IconButton><FacebookIcon className="face"/></IconButton></a>
            </div>
        </div>
    );
}
export default Footer;