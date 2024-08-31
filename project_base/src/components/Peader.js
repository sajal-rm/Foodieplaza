import { useState } from "react";
import {LOGO_URL} from "../utils/contacts.js"

const Hader = () => {// will have  header component here 
    const [btn_name,setbtn_name]=useState("login");
    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} alt="Logo" />
             </div>
             <div id="nav_items">
                <ul id="list">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{btn_name=="login" ? (setbtn_name("logout")) : (setbtn_name("login"))}}>{btn_name}</button>
                </ul>
            </div>
        </div>
    );
};//now header component is in this file , but we have made seperate file for this, to make our code more clear so so we have to export header from file here , so that applayout file can run that code after export , we need to do import it  in the applayout file , because header is a componenet and we will add that component in applayout  
//one way to export is default method(when only 1  need component to be export )
export default Hader;