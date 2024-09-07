
// import { useState ,useEffect } from "react"
 
import useRest_menu from "../utils/useRest_menu.js"
import Shimmer from "./shimmer.js"
import {useParams} from "react-router-dom"


const Rest_menu=()=>{
    // const [res_info,setres_info]=useState(null)
    const {resId}=useParams();//will directly contain resid of app.js page that will change with each restaurant card 
    const res_info=useRest_menu(resId)//its a custom hook ,which we will produce by giving any specific fucntion to follow single resposibility principle ,so this page will follow only 1 principality to display restaurant menu while this custom hook will follow the fetching of data of restaurant which will be displayed on to the restaurant menu since restaurant is having unique restaruant id , so we pass res_id as argument in it 
    //hooks are utitliyt fucntion having some special fucntion 
    // useEffect(()=>{
    //     fetchmenu();
    // },[])
    // const fetchmenu=async()=>{
    //     const val=await fetch(menu+ resId + bend)
    //     const jason= await val.json();
    //     // const pep=jason.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards[0].card.info.name;
    //     // console.log(jason);
    //     // console.log(pep);
    //     setres_info(jason.data)
    // }
    
    // we want data from api for that we have to use hooks beacuse with each restaurant menu will change and we need to update page with each new restaurant 
    if(res_info ===null){return <Shimmer/>}  
    const {name , cuisines , avgRating , costForTwo} = res_info.cards[2].card.card.info;
    const {itemCards}=res_info.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
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