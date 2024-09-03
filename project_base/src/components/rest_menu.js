
import { useEffect } from "react"
const Rest_menu=()=>{
    useEffect(()=>{
        fetchmenu();
    },[])
    const fetchmenu=async()=>{
        const val=await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=17104&catalog_qa=undefined&submitAction=ENTER"
         )
        const json= await val.json();
        const pep=json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards[0].card.info.name;
        console.log(json);
        console.log(pep);
    }
    // we want data from api for that we have to use hooks beacuse with each restaurant menu will change and we need to update page with each new restaurant 
    return  (
        <div className="menu">
            <h1>name of restaurant</h1>
            <h2>menu</h2>
            <ul>
              {/* <li>{json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards[0].card.info.name}</li> */}
              {/* <li>{pep}</li> */}
              <li>Burgers</li>
              <li>Diet cakes</li>
            </ul>
        </div>
    )
}
export default Rest_menu