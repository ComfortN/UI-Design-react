import './left.css';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

export default function left() {
  return (
    <div className="left">

      <div className="leftTop">
        <img src = "./assets/images/drop-cishio-chair1-removebg-preview.png" alt=""className="leftTopImg"></img>
      </div>

      <div className="middle">

        {/* <div class="line-container">

          <div class="horizontal-line"></div>

          <div class="button-container">
            <RadioButtonCheckedOutlinedIcon className='radioBtnGrey' />
            <p className='rotate'>Rotate</p>
          </div>
        </div> */}
        <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        <path d="M10,110 C150,190 250,190 390,100" stroke="grey" stroke-width="2" fill="none" stroke-dasharray="5,5"/>
      </svg>

      </div>
      <div className="leftBottom">
        <div className="bottomBoxes">
          <div className="bottomBox">
            <img src = "./assets/images/chair1.jpg" alt='' className="bottomImg" />
          </div>
          
          <div className="bottomBox">
            <img src = "./assets/images/chair2.jpg" alt='' className="bottomImg" />
          </div>

          <div className="bottomBox">
            <img src = "./assets/images/chair3.jpg" alt='' className="bottomImg" />
          </div>
          
          
          
        </div>
      </div>
    </div>
  )
}
