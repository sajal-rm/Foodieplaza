import { useState } from "react";
import {LOGO_URL} from "../utils/contacts.js"
import {Link} from "react-router-dom"
import useonlinestatus from "../utils/useOnlinestatus.js";
const Hader = () => {// will have  header component here 
    const [btn_name,setbtn_name]=useState("login");
    const onlinestatus=useonlinestatus();// its a custom hooks defined in utis , by same useonlinestatus.js name , it will display whether website is offline or online 
    return (
        <div className="flex justify-between bg-sky-200 shadow-lg">
            <div>
                <img className="w-28" src={LOGO_URL} alt="Logo" />
             </div>
             <div id="flex items-center">
                <ul id="list" className="flex pt-14 mr-7">
                    <li className="px-2">
                        online status:{onlinestatus ?  "\u{1F7E2}":"\u{1F534}" }

                    </li>
                    <li className="px-2"><Link to ="/">Home</Link></li>
                    <li className="px-2"><Link to ="/about">About us</Link></li>
                    <li className="px-2"><Link to ="/contact">Contact us</Link></li>
                    <li className="px-2"> <Link to ="/grocery">Grocery</Link></li>
                    <li className="px-2">Cart</li>
                    
                    {/* react makes out website single page application like here about page , contact is displayed just with one click and website won't reload and header will stay at its place without loading  */}
                    {/* here we are using <link></link> instead of <a></a> because anchor tag do reloads whole page , while link tag  donot reload whole page , so efficient . but in backend <link> tag is <a> anchor tag only but link tag is given by react and it take care about the components that have changed and do change that only ,not like anchor tag which do not tracks changes occured and refreshes all the page  */}
                    {/* there are 2 types of routing 
                    client side routing and server side routing */}
                    {/* server side routing , on click we made a n/w call from where data will be fetched then that page will be loaded  */}
                    {/* client side routing =>  here we are not fetching new page and not fetching datae  here we already have data so we will derectly show the page as clicked  */}
                    <button className="login" onClick={()=>{btn_name=="login" ? (setbtn_name("logout")) : (setbtn_name("login"))}}>{btn_name}</button>
                </ul>
            </div>
        </div>
    );
};//now header component is in this file , but we have made seperate file for this, to make our code more clear so so we have to export header from file here , so that applayout file can run that code after export , we need to do import it  in the applayout file , because header is a componenet and we will add that component in applayout  
//one way to export is default method(when only 1  need component to be export )
export default Hader;