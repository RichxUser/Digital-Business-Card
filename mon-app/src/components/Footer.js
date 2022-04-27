import React from "react"
import facebook from '../images/icons/facebook.svg';
import gitHub from '../images/icons/gitHub.svg';
import instagram from '../images/icons/instagram.svg';
import twitter from '../images/icons/twitter.svg';
export default function Footer(){
    return(
        <div className="footer">
        <img src={facebook} alt="" className="icon--facebook"/>
        <img src={gitHub} alt="" className="icon--gitHub"/>
        <img src={instagram} alt="" className="icon--instagram"/>
        <img src={twitter} alt="" className="icon--twitter"/>
        <small className="small">©2022 Tous droits réservés: Powered by @Lappttop.</small>
        </div>
    )
}