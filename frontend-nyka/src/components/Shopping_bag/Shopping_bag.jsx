import { ItemInBag } from "./Item_in_bag"
import {AmountDetails} from "./Amount_details"
import leftarrow from "./bag_photos/left_arro.png"
import add_icon from "./bag_photos/add_item_icon.png"

function ShoppingBag(){

    let items =  [ {
        "id": 691,
        "product_name": "Biotique Winter Must Haves Combo",
        "product_image": "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/4/44edb09combo16_1.jpg",
        "mrp": "₹669",
        "price": 468,
        "off": "35% Off!",
        "rating_value": "(52155)"
    },
    {
        "id": 222,
        "product_name": "Biotique Winter Must Haves Combo",
        "product_image": "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/4/44edb09combo16_1.jpg",
        "mrp": "₹669",
        "price": 468,
        "off": "35% Off!",
        "rating_value": "(52155)"
    },
   
]
let no_items = items.length


    
    

    return (
        <>
        <div className = "main-div-shopping-bag">
       <div className = "individual-items">
        <div className = "head-img">
           <div><img className = "left-arrow" src = {leftarrow}/></div>
        <div className = "bag-heading">  Shopping Bag ({no_items})</div>
        </div>
        <ItemInBag data = {items} />
        </div>
        <div className = "add-more-items">
            
            <p  className="pink-text "> <img className = "add-icon" src = {add_icon} /> ADD MORE ITEMS </p>
            <div>
                <hr/>
            </div>
        </div>
       
        <AmountDetails data = {items} />
        </div>
        </>

    )
}

export {ShoppingBag}