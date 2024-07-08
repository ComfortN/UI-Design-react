import './right.css'
import { FaStar } from "react-icons/fa";
import { IoIosRadioButtonOn } from "react-icons/io";

export default function right() {
  return (
    <div className="right">
      <div className="rightContainer">
        <p className='right-text'>PREMIUM CHAIRS</p>
        <h2>Drop type cusion chair</h2>

        <div className="reviews">
          <FaStar  className='star'/>
          <label className='review'>
          <strong>  8/10.  </strong> 
          15 Rewiews 
          </label>
        </div>

        <div className="radioButtons">
          <IoIosRadioButtonOn className='radioBtnGrey' />
          <IoIosRadioButtonOn className='radioBtnBlue' />
        </div>


        <div className="productInfo">

          <p>Premium & comfortable memory foam with
            a strong structure built with teak wood,
            it feels amazing.
          </p>

          <div className="productTable">
            <table>
              <tr>
                <td>HEIGHT <br></br><span><strong>52 </strong></span>cm</td>
                <td>WIDTH <br></br> <span><strong>43 </strong></span>cm</td>
              </tr>
            </table>

            <p className='inches'>view in inches</p>

            
          </div>

          <p className='price'><strong>$265.50</strong></p>

          <div className="quantityAdd">
            <button className='remove'> - </button>
            <p className='cartNum'> <b>1</b> </p>
            <button className='add'> + </button>
          </div>

          <div className="cartBuyBtn">
            <button className='addToCart'>ADD TO CART</button>
            <button className='buyNow'>BUY NOW</button>
          </div>
          
        </div>
      </div>
      
      
    </div>
  )
}
