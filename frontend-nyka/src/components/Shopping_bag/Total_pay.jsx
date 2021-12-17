
// import Button from "./Proceed_button"

import right_arrow from "./bag_photos/right_arrow.png"
function TotalPay({total}){

    return (
        <>
        <div class = "bag-final-flex">
         
        <div className = "grand-total-final">
           <div className = "grandi"> Grand Total</div>
           <div className = "pink-text grandi"> {total}</div>

        </div>
        <div >
            <button className = "proceed-button">
                PROCEED {" "}<img className = "right-arrow-icon" src = {right_arrow} />
            </button>
            
        </div>

        </div>


        </>
    )

}
export {TotalPay}