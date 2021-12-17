import "./Shopping_bag.css"


import downarrow from "./bag_photos/down_arrow.png"
import deleteicon from "./bag_photos/delete_icon.png"
function ItemInBag({data}) {
  
    console.log(data)
    return (
        <>
       {data.map( e => 
       <div > 
            <div className = "parent-container">
                <div className = "children-container">
                <div className = "image-container"><img src = {e.product_image} />
                    
                </div>
                <div className = "name-container">
                    <p>{e.product_name}</p>

                    <p>1200ml</p>


                </div>
                < div className = "icon-container">
                    <img className = "delete-icon" src = {deleteicon} />
                </div>
                <hr/>
                </div>
               

                <div className="price-quantity-container">
                   <div className ="marg-left">Quantity : {1} <img className = "down-arrow" src = {downarrow} / ></div>
                   <div className = "mrp fw-text">{e.mrp}</div> 
                   
                </div>

            </div>
       
       
        </div>

       )}

        
        </>
    )


}

export {ItemInBag}