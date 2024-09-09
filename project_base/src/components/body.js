//react making dom operaion superfast and efficient and browser have to rerendering , react is very good in dom operation , bacause react has virtual dom ,since it has diff algo ,by which react can get to know difference between previous and updated onjects and then updates that makes react superfast  
import Shimmer from "./shimmer.js"
import Res_card from "./Restaurent_card.js"
// import Res_list from "../utils/mock_data"
import useonlinestatus from "../utils/useOnlinestatus.js" 
import { useState , useEffect} from "react"//utility function 
import { Link } from "react-router-dom"
//whenver a state variable changes , react rerendering our componene, as state variable changes(updates) body component quicly will get updated (this is superpowe of hooks(state variable)).
// on click of button , react quickly updates ui , hence whenver state variable updates , react will rerender our component, react will keep my data layer in sync with user interface 
// const [listofRest]=useState() thats how we create a state variable by react 
//const listofRest thats how we create normal js variable 
// const [listofRest]=([])//showing null valuein use state variable named
//const [listofRest]=usestate()=>data is given inside this small bracket after usestare and any type of data type can be given in taht




// use effect=> is going to take 2 arguemnt with it one call abck and another one is dependenccy array 

//reconciliation algorithm (react fibre)=>suppose we have our dom having res_cont having some restaurant card (7 in number) but our ui changes  by filtering all 7 caards to 3 cards only , how its gonna happen , we willl see it , => react will creaet a virtual dom , virtual dom => representatio of actual dom , v dom is basically those react element which will be printed (whatever is visible on ui ) is v dom , which is object (react element ), react element is also object , 
// we can say that bdy , header, footer are v dom , 
//react v dom is nothing but react element(object) 


// ***************** diff algo*****************//
// diff algo finds out the previous virtual dom and updated virtual dom let say previuos one was having 7 react elem, new ones are 3 react ele 
// how diff algo works => react will first find out the difference between updated and previous objects (important to note down ) , here in diff algo , react  will check out the difference btween updated and previous  OBJECT then actually updates the dom with new uppdated element. react is constantly checking if there is any changes inside react 
const Body=()=>{
  //try to keep all use state varaiale just in initial of the component and always define use state inside component , dont use it outside component (other wiseit will give err) try to avoid define state varaible inside function , if in order to avoid  incosistency 
  //state variable (super pwerful variable)=>to be superpowerful we have made hooks  (use state is a hooks) hook is a normal js function given by react,hooks are use effect and use state
  //hooks are utility functions 
  // use state => utility function
  //normal js variable 
// const [coco,setcoco]=useState([
//       {"info": {
//         "id": "803172",
//         "name": "Burger King",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_803172.JPG",
//         "locality": "CHOWK",
//         "areaName": "Lucknow",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Burgers",
//           "American"
//         ],
//         "avgRating": 4.4}},
//         {
//           "info": {
//         "id": "803173",
//         "name": " King",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_803172.JPG",
//         "locality": "CHOWK",
//         "areaName": "Lucknow",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Burgers",
//           "American"
//         ],
//         "avgRating": 4.2}
//         }
//     ])//setcoco is used if we want to update coco 
const [coco,setcoco]=useState([])
const [make_change,setmake_change]=useState([])
const [src_bar,setsrc_bar]=useState("")
useEffect(()=> {
  fetchedata();
  console.log("use effect called")
},[])// use effect is called after body has renderend once , then api will load then again will do rendering so basically use effect is called after rendering once, then only call back fucn of use effect is executed
//if we are using nothing in place of dependency array then use effect will execute each time , when body renders , while with empty array as dependency shows that use effect will only execute afer initial body render only, after this if body renders , use effect won't renders , while with something in dependency array shows use effect will render only when that element present in  dependency array will change each time that element change then each time use effect will executed 
console.log("i am first")
const fetchedata=async ()=>{
  const data=await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json=await data.json();
  console.log('wow')
  console.log(json)
  console.log("wkw")
  const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  // Use the fetched restaurants directly for both state updates
  setcoco(restaurants);
  setmake_change(restaurants);
}


// const fetchedata = async () => {
//   try {
//     const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.987523&lng=79.4488695&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const json = await response.json();
//     console.log('Fetched data:', json);
//     // Use setCoco or other state updating logic here
//   } catch (error) {
//     console.error('Failed to fetch data:', error);
//   }
// };
// console.log(typeof coco)
// if(coco.length === 0){//conditional rendering 
//   // console.log("hi")
//   return <Shimmer />;
//   // return <h1>loading...</h1>
// }
// const [filtered,setfiltered]=useState()
const onlinestatus=useonlinestatus();
if(onlinestatus===false) {return (<div>
  <h1>Looks like u'r offline  </h1>
  <h2>check ur internet connection </h2>
</div>)}
    return coco.length===0 ? (<Shimmer />): (
                  <div className="body">
                 <div className="filter flex justify-between">
                 <div className="search m-4 ">
                  <input type="text" className="search_box border border-solid border-black px-2 py-1 m-2"  value={src_bar} onChange={(e)=>{
                    setsrc_bar(e.target.value)
                  }}/>
                  <button className="butts rounded-lg px-4 bg-green-100 py-1" onClick={()=>{
                    // setsrc_bar(e.target.value)
                    const filtered=coco.filter((res)=> { return res.info.name.toLowerCase().includes(src_bar.toLowerCase())})
                    setmake_change(filtered)
                    // const p=coco.length
                    // console.log(coco.length," ",src_bar)  
                  }}>search</button>
                </div>
               <button className="filter-btn bg-gray-300 my-4 px-1 mr-2 rounded-lg" 
               onClick={()=>{
                console.log("button clicked")
                const flist=coco.filter((res)=>res.info.avgRating > 4.3);
                console.log(flist)
                 setmake_change(flist);
                }}
                  > Top Rated Restaurants</button>
                </div>
               <div className="res-cont flex flex-wrap  ">
               {console.log(make_change)}
               {make_change.map((restaurant,index) => (
              // {console.log(restaurant)}
               <Link to ={"/restaurant/"+ restaurant.info.id}><Res_card res_data={restaurant} key={index}/></Link>
                 ))} 

               </div>
 
            </div>
    )
}
export default Body
//there are 2 approaches bywhcih data can be uploaded 
// loading => when our app loads , just make api call to fetch data as we get data , then render to ui 
// another approach =>as soon as page load , we will rendr ui(skeleton) , then we will do api call , then render page again with new this api eg->lichess , this case is mostly used and giving better approach, because initially nothing is there in first one , while secong one is having skeleton first ,then real page , rendering twice is okk , because rendering is not going to take much time 
// hook is jsut a normal js variable 
// use effect hook => 



  // we use usestate because on change on use state varaible , react will make that component render again automatically , which is something special , let say we will show log in and log out butoon change on a click so we need change just on a buton press or any action performed , for change on user interface we have to render the changed component again , inorder to show the change done 