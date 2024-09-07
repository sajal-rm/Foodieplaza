import { useEffect,useState } from "react";
import {menu} from "./contacts.js"
import {bend} from "./contacts.js"

const useRest_menu=(resId)=>{
// we will fetch data 

const [resinfo , setresinfo]=useState(null);

useEffect(()=>{
    fetchData();
},[])
const fetchData=async ()=>{
    const data=await fetch(menu+resId+bend)
    console.log(menu+resId+bend)
    const json=await data.json()
setresinfo(json.data)
}
    return resinfo
}
export default useRest_menu;
