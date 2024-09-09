import {CDN_URL} from "../utils/contacts.js"

const Res_card =({res_data, key})=>{
  const {name,cuisines,avgRating,cloudinaryImageId}=res_data.info
   
    return (
   <div className="card  bg-gray-50 m-4 p-4 w-72 flex flex-col items-center rounded-lg hover:bg-gray-300">
    <img className="img p-4 m-2 rounded-lg" src={CDN_URL+cloudinaryImageId }></img>
<h3 className="font-bold py-2 text-lg">{name}</h3>
<h3>{cuisines.join(', ')}</h3>
<h3>{avgRating}</h3> 

   </div>
    )
}
export default Res_card