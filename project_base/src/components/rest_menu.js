
import { useState ,useEffect } from "react"
import Shimmer from "./shimmer.js"
import {useParams} from "react-router-dom"
import {menu} from "../utils/contacts.js"
import {bend} from "../utils/contacts.js"
const Rest_menu=()=>{
    const [res_info,setres_info]=useState(null)
    const {resId}=useParams();//will directly contain resid of app.js page that will change with each restaurant card 
    useEffect(()=>{
        fetchmenu();
    },[])
    const fetchmenu=async()=>{
        const val=await fetch(menu+ resId + bend)
        const jason= await val.json();
        // const pep=jason.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards[0].card.info.name;
        // console.log(jason);
        // console.log(pep);
        setres_info(jason.data)
    }
    
    // we want data from api for that we have to use hooks beacuse with each restaurant menu will change and we need to update page with each new restaurant 
    if(res_info ===null){return <Shimmer/>}  
    const {name , cuisines , avgRating , costForTwo} = res_info.cards[2].card.card.info;
    const {itemCards}=res_info.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h2>{"cost for two "+ costForTwo/100}</h2>
            <h2>{avgRating +" "+"Rating"}</h2>
            <h3></h3>
            <ul>
                {itemCards.map((item)=>(<li key={item.card.info.id} >{item.card.info.name} -  {"Rs."} { item.card.info.price/100 || item.card.info.defaultPrice/100 }</li>))}
              {/* <li>{ res_info.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name}</li> */}
              {/* <li>{pep}</li> */}
                {/* <li>{itemCards[0].card.info.name}</li> */}
              {/* <li>Diet cakes</li> */}
            </ul>
        </div>
    )
}
export default Rest_menu