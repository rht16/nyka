import {Container,Col,Row, Carousel} from "react-bootstrap"
import "./hair.css"
import {InputGroup,nav} from "react-bootstrap"
// brands you will love
import {Footer} from '../Homepage/Footer'
import lorels1 from "./hair_page_photos/loreals1.png"
import hair2 from "./hair_page_photos/hair2.png"
import new3 from "./hair_page_photos/new3.png"
import photo4 from "./hair_page_photos/anti-frizz4.png"
import wow from "./hair_page_photos/wow5.png"

// hair banner
import hairbanner from "./hair_page_photos/hairbanner.png"

//
import shampoo1 from "./hair_page_photos/shampoo1.png"
import haircombos from "./hair_page_photos/hair_combos.png"
import oils from "./hair_page_photos/oils.png"
import cream_masks from "./hair_page_photos/cream&masks.png"
import appliances from "./hair_page_photos/appliances.png"
import conditioners from "./hair_page_photos/conditioners.png"
import colors from "./hair_page_photos/colour.png"
import serums from "./hair_page_photos/serums.png"

// budget buys
import irresistable from "./hair_page_photos/Irresistible_combos.png"
import hairmasks from "./hair_page_photos/best_of_hairmasks.png"
import haircare from "./hair_page_photos/professional_haircare.png"
import hairshampoo from "./hair_page_photos/best_of_shampoos.png"

// featured brands
import gk from "./hair_page_photos/gk_hair_professional.png"
import pantene from "./hair_page_photos/pantene.png"
import streax from "./hair_page_photos/streax_professional.png"
import ogx from "./hair_page_photos/ogx.png"
import wishcare from "./hair_page_photos/wishcare.png"

// shop by hair type 
import sp from "./hair_page_photos/sp.png"
import blunt from "./hair_page_photos/blunt.png"
import schwarkopf from "./hair_page_photos/schwarkopf.png"
import mamaearth from "./hair_page_photos/mamaearth.png"

// budget buys
import all_nature_products from "./hair_page_photos/all_nature_products.png"
import consicousnykaa from "./hair_page_photos/consicous_at_nykaa.png"
import professionalhair from "./hair_page_photos/professional_hair_care_get_salon.png"
import alluringhair from "./hair_page_photos/alluring_hair_colors.png"


// hair types
import straighthair from "./hair_page_photos/hair_type_straight.png"
import oilyhair from "./hair_page_photos/hair_type_oily.png"
import finehair from "./hair_page_photos/hair_type_fine.png"
import curlyhair from "./hair_page_photos/hair_type_curly.png"

// beauty advice
import waystocurlhair from "./hair_page_photos/3_ways_to_curl_your_hair.png"
import waystocontrolhairfall from "./hair_page_photos/6_ways_to_control_hairfall.png"
import waystohealthyhair from "./hair_page_photos/how_to_get_heathy_and_shiny_hair.png"

// carousel 1
import carousel_1 from "./hair_page_photos/carousel_good_hair_everyday.png"
import carousel_2 from "./hair_page_photos/carousle_loreal_prolonger.png" 
import carousel_3 from "./hair_page_photos/carousel_godrej_professional.png"
import carousel_4 from "./hair_page_photos/carousel_haircare_essentials.png"

// carousel 3  => best seller
import aveda from "./hair_page_photos/bestseller_aveda.png"
import kama from "./hair_page_photos/bestseller_kama_ayurveda.png"
import forestessential from "./hair_page_photos/bestseller_forest_essential.png"
import kiehel from "./hair_page_photos/best_seller_kiehel.png"
import sebestian from "./hair_page_photos/bestseller_sebestian.png"

// carousel 2 => 
import hairfall from "./hair_page_photos/hairfall_minimize_heat.png"
import dullness_dryness from "./hair_page_photos/dullness&dryness.png"
import frizz from "./hair_page_photos/frizz.png"
import dandruff from "./hair_page_photos/dandruff.png"
import split_ends from "./hair_page_photos/split_ends.png"
import {Navbar} from "../Homepage/Navbar"
import MultipleItems from "./MultipleItems"


function Hairpage() {
  
 

    return (
        <>
        <Navbar />
        <div className = "main-main-div">

          <MultipleItems/>

   
       


     


{/*              
          <Slider {...settings}>
        <div>
          <img className="slider_image" src={loreals1} alt="jdslkjf" />
        </div>
        <div>
          <img className="slider_image" src={hair2} alt="jdslkjf" />
        </div>
        <div>
          <img className="slider_image" src={new3} alt="jdslkjf" />
        </div>
        <div>
          <img className="slider_image" src={photo4} alt="jdslkjf" />
        </div>
        <div>
          <img className="slider_image" src={wow} alt="jdslkjf" />
        </div>
        <div>

      </Slider> */}

  




        <h4 className = "mt-5 text-center">BRANDS YOU WILL LOVE</h4>

             
                 <Container className = "mt-4">
                
        <Row>
           
            <Col sm = {6} md = {4} lg = {4}>
                <img src= {lorels1} className ="img-fluid" />
                
            </Col>
              <Col sm = {6} md = {4} lg = {4}>
                <img src= {hair2} className ="img-fluid" />
                
            </Col>
              <Col sm = {6} md = {4} lg = {4}>
                <img src= {new3} className ="img-fluid" />
            </Col>
      </Row>
            <Row className = "mt-4">
        <Col sm = {6} md = {4} lg = {{span:4, offset: 2}}>
                <img src= {photo4} className ="img-fluid" />
                
            </Col>
              <Col sm = {6} md = {4} lg = {4}>
                <img src= {wow} className ="img-fluid" />
            </Col>
        
        </Row>
        <Row className = "mt-5">
            <Col sm = {6} md = {4} lg = {12} >
                <img src = {hairbanner}  className = "img-fluid" /> 
            </Col>
        </Row>
        </Container>
  



                
      


        
        <h4 className = "text-center mt-5">SHOP BY CATEGORY</h4>
      
      
          

         
        <div className = "category">
          <div>
          <img src={shampoo1} alt="category" />
        </div>
        <div>
          <img src={haircombos} alt="category" />
        </div>

        <div>
          <img src={oils} alt="category" />
        </div>
        
        <div>
          <img src={cream_masks} alt="category" />
        </div>
        <div>
          <img src={appliances} alt="category" />
        </div>
        <div>
          <img src={conditioners} alt="category" />
        </div>
        <div>
          <img src={colors} alt="category" />
        </div>
        <div>
          <img src={serums} alt="category" />
        </div>
      </div>
      

      <h4 className = "text-center mt-5">SHOP BY CONCERN</h4>


      <div className = "shop_by_concern">



      <Carousel  indicators = {false} variant = "dark" className = "mt-1 h-100">
  <Carousel.Item variant = "dark" interval = {200000} >
    <img
      className="margiri"
      src={hairfall}
      alt="First slide"
    />
     <img
      className="margiri"
      src={dullness_dryness}
      alt="First slide"
    />
     <img
      className="margiri"
      src={frizz}
      alt="First slide"
    />
    
   
  </Carousel.Item>
  
  <Carousel.Item   interval = {200000}>
    <img
      className="margiri"
      src={dandruff}
      alt="First slide"
    />
     <img
      className="margiri"
      src={split_ends}
      alt="First slide"
    />
    
   
  </Carousel.Item>
    
   
  

  
</Carousel>
</div>


      {/* <Container className = "mt-4">
        
            <Row >
            <Col sm = {6} md = {4} lg = {{span:2, offset:2}}>
                <img src= {hairfall} class="img-fluid" />
                
            </Col>
              <Col sm = {6} md = {4} lg = {2}>
                <img src= {dullness_dryness} class="img-fluid" />
                
            </Col>
              <Col sm = {6} md = {4} lg = {2}>
                <img src= {frizz} class="img-fluid" />
            </Col>
            <Col sm = {6} md = {4} lg = {2}>
                <img src= {dandruff} class="img-fluid" />
            </Col>
             <Col sm = {6} md = {4} lg = {2}>
                <img src= {split_ends} class="img-fluid" />
        //     </Col> */}
                
        {/* </Row></Container> */}

        <h4 className = "text-center mt-5">LUXE BRANDS</h4>
        <div className = "luxe-brands">
      <Carousel indicators = {false} variant = "dark" className = "mt-1 h-100">
  <Carousel.Item   interval = {200000}>
    <img
      className="margiri"
      src={aveda}
      alt="First slide"
    />
     <img
      className="margiri"
      src={kama}
      alt="First slide"
    />
    
   
  </Carousel.Item>
  
  <Carousel.Item interval = {1000}>


  <img
      className="margiri"
      src={forestessential}
      alt="Second slide"
    />
      <img
      className="margiri"
      src={kiehel}
      alt="Second slide"
    />
   
    
  </Carousel.Item>
  <Carousel.Item interval = {1000}>


<img
    className="margiri"
    src={sebestian}
    alt="Second slide"
  />
    
 
  
</Carousel.Item>
</Carousel>
</div>


        
            <h4 className = "text-center mt-5">BUDGET BUYS</h4>
        <Container className = "mt-4">
            <Row >
            <Col sm = {6} md = {4} lg = {3}>
                <img src= {irresistable} className="img-fluid" />
                
            </Col>
              <Col sm = {6} md = {4} lg = {3}>
                <img src= {haircare} className ="img-fluid" />
                
            </Col>
              <Col sm = {6} md = {4} lg = {3}>
                <img src= {hairmasks} className ="img-fluid" />
            </Col>
            <Col sm = {6} md = {4} lg = {3}>
                <img src= {hairshampoo} className ="img-fluid" />
            </Col>
                
            </Row>

        </Container>
        
         
        <h4 className = "text-center mt-5">FEATURED BRANDS</h4>
        <Container className = "mt-4">

            <Row >
            <Col sm = {12} md = {6} lg = {{span:2 ,offset:1}}>
                <img src= {gk} className="img-fluid" />
                
            </Col>
              <Col sm = {12} md = {6} lg = {2}>
                <img src= {pantene} className="img-fluid" />
                
            </Col>
              <Col sm = {12} md = {6} lg = {2}>
                <img src= {ogx} className ="img-fluid" />
            </Col>
            <Col sm = {12} md = {6} lg = {2}>
                <img src= {streax} className ="img-fluid" />
            </Col>
            <Col sm ={12} md = {6} lg = {2}>
                <img src= {wishcare} className ="img-fluid" />
            </Col>
                

            </Row>
        </Container>
       
        <Container className = "mt-4">

        <Row >
            <Col sm = {12} md = {6} lg = {{span:2,offset:2}}>
                <img src= {sp} className="img-fluid" />
                
            </Col>
              <Col sm = {12} md = {6} lg = {2}>
                <img src= {blunt} className="img-fluid" />
                
            </Col>
              <Col sm = {12} md = {6} lg = {2}>
                <img src= {schwarkopf} className="img-fluid" />
            </Col>
            <Col sm = {12} md = {6} lg = {2}>
                <img src= {mamaearth} className="img-fluid" />
            </Col>
                

            </Row>
           

        </Container>
        <h4 className = "text-center mt-5">SHOP BY HAIR TYPE</h4>

          <Container>

        <Row className = "mt-4">
            <Col sm = {12} md = {4} lg = {3}>
                <img src= {straighthair} className="img-fluid" />
                
            </Col>
              <Col sm = {12} md = {4} lg = {3}>
                <img src= {oilyhair} className="img-fluid" />
                
            </Col>
              <Col sm = {12} md = {4} lg = {3}>
                <img src= {finehair} className="img-fluid" />
            </Col>
            <Col sm = {12} md = {4} lg = {3}>
                <img src= {curlyhair} className="img-fluid" />
            </Col>
                

            </Row>
           

        </Container>

        <h4 className = "text-center mt-5">BUDGET BUYS</h4>

          <Container className = "mt-4">

        <Row>
            <Col sm = {12} md = {4} lg = {4}>
                <img src= {all_nature_products} className="img-fluid" />
                
            </Col>
              <Col sm = {12} md = {4} lg = {4}>
                <img src= {consicousnykaa} className="img-fluid" />
                
            </Col>
              <Col sm = {12} md = {4} lg = {4}>
                <img src= {professionalhair} className="img-fluid" />
            </Col>
            </Row>

            <Row className = "mt-4">

            <Col sm = {12} md = {4} lg = {4}>
               
            </Col>

            <Col sm = {12} md = {4} lg = {4}>
                <img src= {alluringhair} className="img-fluid" />
            </Col>

            <Col sm = {12} md = {4} lg = {4}>
               
            </Col>
            </Row>
        </Container>

        <h4 className = "text-center mt-5">BEAUTY ADVICE</h4>

        <Container>
            <Row className = "mt-4">
                <Col>
                <img src = {waystocurlhair} className = "img-fluid" />

                </Col>
                <Col>
                <img src = {waystocontrolhairfall} className = "img-fluid" />

                </Col>
                <Col>
                <img src = {waystohealthyhair} className = "img-fluid" />

                </Col>
            </Row>
            </Container>

            <Container className = "mt-5">
                <Row>
                    <Col>
                    <img src = {hairbanner} className = "img-fluid" />
                    </Col>
                </Row>

            </Container>







       </div>
       
      <Footer />

        </>
    )

}

export {Hairpage}
