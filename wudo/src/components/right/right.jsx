import './right.css'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';


export default function right() {
  return (
    <div className="right">
      <p>PREMIUM CHAIRS</p>
      <h2>Drop type cusion chair</h2>

      <div className="reviews">
        <StarOutlinedIcon className='star'/>
        <label className='review'>
          <strong>8/10.  </strong> 
          15 Rewiews 
        </label>
      </div>

      <div className="radioButtons">
        <RadioButtonCheckedOutlinedIcon className='radioBtnGrey' />
        <RadioButtonCheckedOutlinedIcon className='radioBtnBlue'/>
      </div>


      <div className="productInfo">

        <p>Premium & comfortable memory foam with
          a strong structure built with teak wood,
          it feels amazing.
        </p>

        <div className="productTable">
          <table>
            <tr>
              <td>HEIGHT <br></br><span>52cm</span></td>
              <td>WIDTH <br></br> <span>43cm</span></td>
            </tr>
          </table>

          <p>view in inches</p>

          
        </div>

        <p>$265.50</p>

        <div className="quantityAdd">
          <button className='remove'> - </button>
          <p> 1 </p>
          <button className='add'> + </button>
        </div>

        <div className="cartBuyBtn">
          <button className='addToCart'>ADD TO CART</button>
          <button className='buyNow'>BUY NOW</button>
        </div>
        
      </div>
      
    </div>
  )
}
