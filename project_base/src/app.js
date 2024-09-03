// import React from "react"
// import ReactDOM from "react-dom"

// const Header= ()=>{return (// will have  header component here 
//     <div className="header">
//         <div> 
//             <img className="logo" src="https://99designs.com/logo-design/contests/create-logo-food-delivery-app-565592"></img>
//         </div>
//         <div id="nav_items">
//             <ul>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Contact us</li>
//                 <li>Cart</li>
//             </ul>

//         </div>

//     </div>

// )}
// const Applayout=()=>{// app layout is component that returns peices of jsx  
//     return (
//         <div class="app" > 
// <header/>

//         </div>
//     )
    
// }// it will contain all components ,its a container


// const root=ReactDOM.createRoot(document.getElementById("cid"))
// root.render(<applayout></applayout>)


import React from "react"
import ReactDOM from "react-dom/client"
import Hader from "./components/Peader.js"
import Body from "./components/body.js"
import About from "./components/about.js"
import Contact from "./components/contact.js"
import Error from "./components/error.js"
import Rest_menu from "./components/rest_menu.js"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";// this cbr will create ro;uting config for us ,  we are creating routing config inside a variable approuter 
import Rest_menu from "./components/rest_menu.js"
// config means some info , taht is telling browser router , that whats happeing on that path eg on calling /about => will lead us to about page so this cbr takes a list of paths , paths are object and object will contain 2 things path (way to access that element )and element describing the page or destination we are going through that path , hence cbr is containing arrays of objects , while those objects having path and element , which path will lead to , thats how cbr do routng configuration ( some info telling about specific route)

// const Header = () => {// will have  header component here 
//     return (
//         <div className="header">
//             <div>
//                 <img className="logo" src="https://imgs.search.brave.com/NoyKKRMnTTjic8wDM2_INlz7UnzbQEelW5mZycGvMcg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/LzRWTE0tT2NId0xw/UF9JOG5EdHh2UzJY/aTZFbz0vMHgwOjEw/MDB4MTAwMC82MDB4/NjAwLzk5ZGVzaWdu/cy1jb250ZXN0cy1h/dHRhY2htZW50cy8x/MTgvMTE4NzAzL2F0/dGFjaG1lbnRfMTE4/NzAzNjE1" alt="Logo" />
//              </div>
//              <div id="nav_items">
//                 <ul id="list">
//                     <li>Home</li>
//                     <li>About us</li>
//                     <li>Contact us</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     );
// }; now header component is not in this file , because we have made seperate file for that so so we have to import header file here , so that applayout  file can run that code before import , we need to export it first from header file 

// const Res_list=[
//     {
//       "info": {
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
//         "avgRating": 4.4,
//         "parentId": "166",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 32,
//           "lastMileTravel": 1.8,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "1.8 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-24 04:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Burger.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹99"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-9b5f78c5-fcd8-424c-abc6-be8f85ab0ba1"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/burger-king-chowk-lucknow-lucknow-803172",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "405025",
//         "name": "KFC",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/d08dc977-5e85-46df-8142-feb32cd9873b_405025.JPG",
//         "locality": "Hazratganj",
//         "areaName": "Hazratganj",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Burgers",
//           "Fast Food",
//           "Rolls & Wraps"
//         ],
//         "avgRating": 4.4,
//         "parentId": "547",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 42,
//           "lastMileTravel": 4.8,
//           "serviceability": "SERVICEABLE",
//           "slaString": "40-45 mins",
//           "lastMileTravelString": "4.8 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-23 23:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "20% OFF",
//           "subHeader": "UPTO ₹50"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "4.1",
//             "ratingCount": "5K+"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-9b5f78c5-fcd8-424c-abc6-be8f85ab0ba1"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/kfc-hazratganj-lucknow-405025",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "636723",
//         "name": "Chinese Wok",
//         "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//         "locality": "Mahanagar",
//         "areaName": "Mahanagar",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Chinese",
//           "Asian",
//           "Tibetan",
//           "Desserts"
//         ],
//         "avgRating": 4.3,
//         "parentId": "61955",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 44,
//           "lastMileTravel": 6.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "40-45 mins",
//           "lastMileTravelString": "6.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-24 01:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹199"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "3.6",
//             "ratingCount": "20+"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-9b5f78c5-fcd8-424c-abc6-be8f85ab0ba1"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/chinese-wok-mahanagar-lucknow-636723",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "789167",
//         "name": "Theobroma",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/9fb98a91-e274-449d-8d1c-4704a01db9f8_789167.jpg",
//         "locality": "SECTOR- B",
//         "areaName": "Aliganj",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Bakery",
//           "Desserts"
//         ],
//         "avgRating": 4.4,
//         "parentId": "1040",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "100+",
//         "sla": {
//           "deliveryTime": 32,
//           "lastMileTravel": 4.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "4.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-24 00:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "newg.png",
//               "description": "Gourmet"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Gourmet",
//                     "imageId": "newg.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹99"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-9b5f78c5-fcd8-424c-abc6-be8f85ab0ba1"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/theobroma-sector-b-aliganj-lucknow-789167",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "637321",
//         "name": "Pizza Hut",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/8d5d8f49-22b5-47ec-ab3b-7bcfc7a256ec_637321.jpg",
//         "locality": "Hardoi Road",
//         "areaName": "Daulatganj",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Pizzas"
//         ],
//         "avgRating": 4.2,
//         "parentId": "721",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 42,
//           "lastMileTravel": 3.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "40-45 mins",
//           "lastMileTravelString": "3.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-24 04:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Pizza.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹189"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-9b5f78c5-fcd8-424c-abc6-be8f85ab0ba1"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/pizza-hut-hardoi-road-daulatganj-lucknow-637321",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "83224",
//         "name": "Al Baike Arabecue",
//         "cloudinaryImageId": "gqllu2qnsrawyuk4op5x",
//         "locality": "Chowk",
//         "areaName": "Chowk",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Snacks",
//           "Fast Food",
//           "Burgers",
//           "Continental",
//           "Mughlai",
//           "Biryani",
//           "American"
//         ],
//         "avgRating": 4.4,
//         "parentId": "28969",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 32,
//           "lastMileTravel": 1.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "1.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-24 03:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹125 OFF",
//           "subHeader": "ABOVE ₹249",
//           "discountTag": "FLAT DEAL",
//           "discountCalloutInfo": {
//             "message": "Free Delivery",
//             "logoCtx": {
//               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//             }
//           }
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "3.9",
//             "ratingCount": "50+"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-9b5f78c5-fcd8-424c-abc6-be8f85ab0ba1"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/al-baike-arabecue-chowk-lucknow-83224",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "78862",
//         "name": "Domino's Pizza",
//         "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
//         "locality": "Khun Khunji Road",
//         "areaName": "Chowk",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Pizzas",
//           "Italian",
//           "Pastas",
//           "Desserts"
//         ],
//         "avgRating": 4.4,
//         "parentId": "2456",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 25,
//           "lastMileTravel": 1.5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "1.5 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-24 03:59:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Pizza.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹150 OFF",
//           "subHeader": "ABOVE ₹299",
//           "discountTag": "FLAT DEAL"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "4.1",
//             "ratingCount": "1K+"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-9b5f78c5-fcd8-424c-abc6-be8f85ab0ba1"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/dominos-pizza-khun-khunji-road-chowk-lucknow-78862",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },



//     {
//       "info": {
//         "id": "84313",
//         "name": "Mubeen's",
//         "cloudinaryImageId": "ajwonvkychxzkbvyq8dv",
//         "locality": "Chowk",
//         "areaName": "Chowk",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Mughlai",
//           "Kebabs",
//           "Biryani"
//         ],
//         "avgRating": 4.4,
//         "parentId": "453541",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 36,
//           "lastMileTravel": 2.3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "35-40 mins",
//           "lastMileTravelString": "2.3 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-24 02:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹125 OFF",
//           "subHeader": "ABOVE ₹299",
//           "discountTag": "FLAT DEAL"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "4.2",
//             "ratingCount": "5K+"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-9b5f78c5-fcd8-424c-abc6-be8f85ab0ba1"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/mubeens-chowk-lucknow-84313",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     }
//   ]
//   console.log(Res_list[0])
// const Res_card =({res_data, key,})=>{// {} because , given data is destructured form of props object 
//   const {name,cuisines,avgRating,cloudinaryImageId}=res_data.info
//     // const {info}=props
//     // console.log({info})
//     // const {res_name,cuisines}=restaurant.info
//     // if (!info) {
//     //     // Return null or a loading state if info is undefined
//     //     return null;
//     //   }
// // const Res_card=({res_name,cuisines})=>{this is another way of writing above code , in this way we need not to write props.res_name,props.cuisines, we can directly call res_name and cuisines etc...
//     // console.log(props)
//     return (
//    <div className="card">
//     <img className="img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId }></img>
// <h3>{name}</h3>
// <h3>{cuisines.join(', ')}</h3>
// <h3>{avgRating}</h3>
// {/* here we have to wrap props.res_name and props.cuisiens, etc...  under the {} because props is a js object and in jsx we have to write js under {} , thats how babel will get to know about js inside jsx  */}
// {/* <h4>{info.cuisines}</h4> */}
//    </div>
//     )//when i am manually writing information in the informatiion inthe res_card =>this is not a dynamic way , what if i want to add many restaurents(add kfc , dominos) , this way is very hard and time taking as well , taking much space and not compatible to write , thats why we came up with concept of props 
//     // props also known as properties , props are just normal arguments to the function , the way component  is nothing but the function , similarly props is just argument that is passed with function 
//     // so passing props to fucntion is similar as passing argument in fucntion , so in react, react will take all properties (props or arguments for components ) and wrap it as object and  pass over parameter of component as props , parameter will have "props" written in that , no need to write all argumetns , while when calling component , we have to pass all the arguemnt , which react will combine and wrap it in object known as props , hence props is parameter to the component 
// }
// const Body=()=>{
    
//     // console.log(props);
//     //will represent body part of the page 
//     // -search
//     // -restaurent container
//     //    -restaurentcard
//     //       -img
//     //       -name of res, starrating, cuisines
//     return (
//         // define jsx code here regarding body 
//             <div className="body">
//                <div className="search">
//              <h1>search</h1>
//                </div>
//                <div className="res-cont">
               
//               {/* // several restaurent will be there so use 1  components for several restaurents each having restaurent cards */}
//                {/* <Res_card name="punjabi dhaba" cuisines="aloo paratha */}
//                {/* ,paneer chilli" /> */}
//                {/* <Res_card name="kfc" cuisines="pizza , burger , fries" /> */}
//                {/* <Res_card name="dominos" cuisines="paneer pizza, combo, fries"/> */}
//             {/* generally data is not given like that , we will take data from backend via API , that is in form of json format  */}
          
//                {/* <Res_card res_data={Res_list[0]}></Res_card> */}
//                {Res_list.map((restaurant,index) => (
//                <Res_card key={index}  res_data={restaurant}/>
//                  ))} 
//                {/* Res_list is in {} because res_list[0] is an js object , which in js will be writtne in culry brackets{} */}

//                </div>

//             </div>
//     )
// }

const AppLayout = () => {
    //  app layout is component that returns peices of jsx
    return (//add different components here in return 
        <div className="app">
            <Hader />
            <Outlet/>
            {/* out let is like a tunnel all chilren according to the routes and come over on display  */}


        </div>
    );
};// it will contain all components ,its a container
const approuter =createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[// here these are the children component and path correspondingly of applayout parent , we want to display body ,if path is "/" . if path is "/about" the show about component ,,if path is "/contact" then contact should be shown , hence we need to push child according to our rout , means as per path we wil send correspoinding child ,now what do we send in applayout component other than header , we will have outlet ,which will keep value of component on every path change as per the path of that component 
            {//outlet will be filled with children according to path we have 
                path: "/",
                element :<Body/>
            },
            {
                path:"/about",
               element:<About/>
            },
            {
        path :"/contact",
        element :<Contact/>
            },
            {
                path:"/restaurant/:resId",// : representing that resId is dynamic with each new restaurant resId is unique and new route with each diff resaturant
                element: <Rest_menu/>
            }
        ],
        errorElement:<Error/>// here we can give our error page , whatever we want to display during error 

    },
    //here when we are not using outlet , we dont have header component with about,contact , home etc... , so we will do something such that header component will be as there , but body component will change (dynamic) as per click or need for that we comeup with concept of children routes with the help of this header is remain undistrubed while children routes will kepp . first , these will be made children routees(about, body, contact,home etc... ) different path will lead to different component defined in the children component and these
]);// this is how we give configuration , if this is path  , this element is page that will load 
// now we have pass/provide this config to render it , for that we will take router provider , this will provide routing config to our app/ website , earlier we were rendering app loayout direct ly, but now we will provide routerconfig via router provider , now we will import router provider component from router dom library , then 
// what if we are using random url , then error will coming , but not defining which kind of error is that , its just showing unexpected errpr  => this is handled by react , but we can create our own error page using react router dom 
const root = ReactDOM.createRoot(document.getElementById("cid"));
root.render(<RouterProvider router={approuter} />);
//there are other router also , other than crate browser router 