
import {useEffect,useState} from "react"
const useonlinestatus=()=>{
    //check if online 
    //boolean value
 const [onlinestatus,setonlinestatus]=useState(true) 
    useEffect(()=>{
window.addEventListener("offline",()=>{
setonlinestatus(false) 
})
window.addEventListener("online",()=>{
    setonlinestatus(true)
});
    },[])
    return onlinestatus;
}
export default useonlinestatus 