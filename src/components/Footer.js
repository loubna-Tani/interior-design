import React, { Component } from 'react'
import {AiOutlineLinkedin, AiFillGithub} from "react-icons/ai";
import {TiSocialInstagram} from "react-icons/ti";


export default class Footer extends Component {
    render() {
        return (
            <section className="footer">
             <div className="footer-box">
             <div className="footer-icons">
                 <a href="https://www.linkedin.com/in/loubna-tani-63060773/"><AiOutlineLinkedin/></a>
                 <a href="https://github.com/loubna-Tani"><AiFillGithub/></a>
                 <a href="https://www.instagram.com/loubna__ben/"><TiSocialInstagram/></a>
             <p>© 2020 Company. All Right Reserved.</p>
             </div>
             </div>
             </section>
        )
    }
}
