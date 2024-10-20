import "./Hero.css";
import Propstwo from "../Components/Propstwo";
import Cabin from "../assets/Images/cabin.jpg";
import Brick from "../assets/Images/brickgame.jpeg";
import Nokia from "../assets/Images/nokia.jpeg";
import Pomade from "../assets/Images/pomade.jpg";
const Hero = () => {
    return (  
      <div className="click">
        <Propstwo Product="Cabin Biscuit" Price="$1.99" Image={Cabin} Description="Low Sugar Biscuits"/>
        <Propstwo Product="Brick Game" Price="$19.99" Image={Brick} Description="All time gaming on the go"/>
        <Propstwo Product="Nokia 1100" Price="$30.99" Image={Nokia} Description="Strong connect to the world"/>
        <Propstwo Product="Pomade lotion" Price="$4.99" Image={Pomade} Description="your glowing skin favourite"/>
      </div>
  
    );
  };
   
  export default Hero;