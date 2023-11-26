const Popup = ({item}) => {
const {title,name,price,img,desc} = item
    return (
        <>
           <div className="bg"></div>
           <div className="popup">
            <p className="closex">
                <i className="xi-close" ></i>
            </p>
            <h2>{title}</h2>
            <img src={img} alt="" />
            <p>가격:{price}</p>
            <p>{name}</p>
            <p>{desc}</p>
            </div>  
        </>
    );
};

export default Popup;