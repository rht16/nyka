import "./Shopping_bag.css"
import downarrow from "./bag_photos/down_arrow.png"
import deleteicon from "./bag_photos/delete_icon.png";
import{useState , useEffect} from "react";
function ItemInBag({data}) {

    // const [data,setData]=useState([]);
//     var details_from_local1 =[]
//     details_from_local1.push(JSON.parse(localStorage.getItem("card")));
//     let details_from_local1 = JSON.parse(localStorage.getItem("card"));
//     setData(details_from_local1)
//   console.log(details_from_local1);

//   useEffect(() => {
//     let details_from_local1 = JSON.parse(localStorage.getItem("card"));
//     setData(details_from_local1)
//     console.log(details_from_local1);
//   }, [])
    return (
      


// {/* {data.map((dataa)=>{
//     return(
//         <div>
//         <div>{dataa.product_name}</div>
//         </div>
//     )
// })} */}








        
 
        <div > 
            <div className = "parent-container">
                <div className = "children-container">
                <div className = "image-container"><img src = {data.product_image} />
                    
                </div>
                <div className = "name-container">
                    <p>{data.product_name}</p>

                    <p>1200ml</p>


                </div>
                < div className = "icon-container">
                    <img className = "delete-icon" src = {deleteicon} />
                </div>
                <hr/>
                </div>
               

                <div className="price-quantity-container">
                   <div className ="marg-left">Quantity : {1} <img className = "down-arrow" src = {downarrow} / ></div>
                   <div className = "mrp fw-text">{data.mrp}</div> 
                   
                </div>

            </div>
       
       
        </div>
     
        
     
         
         


        
);
    


}

export {ItemInBag}