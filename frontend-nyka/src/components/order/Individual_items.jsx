
import "./order.css"
function IndividualItems() {
    let data = JSON.parse(localStorage.getItem("card"));

    var total = 0;
    var len = 0;



    return (
        <>
        
        { data.map((prod)=>(
        total+= Number(prod.price),
        len = data.length,
        <div className = "order-parent-container">

      
                 <div className = "order-children-container">
                 <div className = "order-image-container"><img src = {prod.product_image} />
                     
                 </div>
                 <div className = "order-name-container">
                     <p>{prod.product_name}</p>
 
                     <p>1200ml</p>
                     <p>Quantity: 1</p>
 
 
                 </div>
                 <div className = "order-icon-container">
                     {prod.price}
                
                </div>
               
            </div>
            <hr/>
            </div>
            
            
            

            ))}
            
        </>
    )



}

export {IndividualItems}