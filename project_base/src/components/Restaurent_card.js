import {CDN_URL} from "../utils/contacts.js"

const Res_card =({res_data, key})=>{
  const {name,cuisines,avgRating,cloudinaryImageId}=res_data.info
   
    return (
   <div className="card">
    <img className="img" src={CDN_URL+cloudinaryImageId }></img>
<h3>{name}</h3>
<h3>{cuisines.join(', ')}</h3>
<h3>{avgRating}</h3> 

   </div>
    )
}
export default Res_card