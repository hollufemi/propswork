import "./Propsthree.css";
const Propsthree = ({Title ,Author,Content,Date}) => {
    return ( 
        <div className="flip">
        <img src={Title} alt="" />
        <h2>{Author}</h2>
        <h6>{Content}</h6> 
        <p>{Date}</p> 
    </div>
     );
};

export default Propsthree;