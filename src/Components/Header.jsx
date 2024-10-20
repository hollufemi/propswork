import "./Header.css";
import Propsone from "../Components/Propsone";
import Tpain from "../assets/Images/tpain.jpeg";
import Trump from "../assets/Images/trump.jpeg";
import Jonathan from "../assets/Images/jonathan.jpeg";
import Buhari from "../assets/Images/buhari.jpg";
import Kamala from "../assets/Images/kamala.jpeg";
const Header = () => {
    return ( 
        <div className="card">
            <Propsone Image={Tpain} Name="Bola Tinubu" Age="108 years" Location="Abuja"/>
            <Propsone Image={Trump} Name="Donald J. Trump" Age="78 years" Location="New York"/>
            <Propsone Image={Jonathan} Name="Goodluck Jonathan" Age="66 years" Location="Otuoke"/>
            <Propsone Image={Buhari} Name="Muhammadu Buhari" Age="81 years" Location="Daura"/>
            <Propsone Image={Kamala} Name="Kamala Harris" Age="60 years" Location="Washington DC"/>
            
        </div>
     );
};
 
export default Header;