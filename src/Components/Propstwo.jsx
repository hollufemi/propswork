import "./Propstwo.css";

const Propstwo = ({Product ,Price,Image,Description}) => {
    return ( 
        <div className="folder">
        <img src={Image} alt="" />
        <p>{Price}</p>
        <h1>{Product}</h1> 
        <h6>{Description}</h6> 
    </div>
     );
};

export default Propstwo;