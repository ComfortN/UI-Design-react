import "./home.css";
import Navbar from '../components/navbar/navbar'
import Left from '../components/left/left'
import Right from '../components/right/right'

export default function Home() {
    return (
        <div className="home">Home
        
        <Navbar/>
        <div className="home-wrapper">
            <Left />
            <Right />
        </div>
        </div>
        
    )
}