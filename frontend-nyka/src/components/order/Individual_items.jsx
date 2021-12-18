
import "./order.css"
function IndividualItems({data}) {
let total = 1229

    return (
        <>
        
        {data.map(e => 
        <div className = "order-parent-container">

      
                 <div className = "order-children-container">
                 <div className = "order-image-container"><img src = {e.product_image} />
                     
                 </div>
                 <div className = "order-name-container">
                     <p>{e.product_name}</p>
 
                     <p>1200ml</p>
                     <p>Quantity: 1</p>
 
 
                 </div>
                 <div className = "order-icon-container">
                     {total}
                
                </div>
               
            </div>
            <hr/>
            </div>
            
            )}
            


            
        </>
    )



}

export {IndividualItems}