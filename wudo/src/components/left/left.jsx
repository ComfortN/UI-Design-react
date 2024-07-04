import './left.css';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

export default function left() {
  return (
    <div className="left">
      <div className="leftTop">
        <img src = "./assets/images/drop-cishio-chair.jpg" alt=""className="leftTopImg"></img>
      </div>
      <div className="middle">

      <div class="line-container">
        <div class="horizontal-line"></div>
        <div class="button-container">
        <RadioButtonCheckedOutlinedIcon className='radioBtnGrey' />
        </div>
    </div>

      </div>
      <div className="leftBottom">
        <div className="bottomBoxes">
          <div className="bottomBox">
            <img src = "./assets/images/chair-3.jpg" alt='' className="bottomImg" />
          </div>
          
          <div className="bottomBox">
            <img src = "./assets/images/chair-1.jpg" alt='' className="bottomImg" />
          </div>

          <div className="bottomBox">
            <img src = "./assets/images/chair-2.jpg" alt='' className="bottomImg" />
          </div>
          
          
          
        </div>
      </div>
    </div>
  )
}
