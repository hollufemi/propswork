import "./Propsone.css";
const Propsone = ({Image,Name,Age,Location}) => {
    return ( 
        <div className="fold">
        <img src={Image} alt="" />
        <h1>{Name}</h1>
        <p>{Age}</p> 
        <p>{Location}</p> 
    </div>
     );
};

export default Propsone;