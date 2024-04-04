import starIcon from "../assets/images/star.png";
const imgFolder = "../assets/images/";

export default function CardContent(props){
    let stausText;
    if(props.openSpots === 0){
        stausText = "Soldout";
    }else if(props.location === "Online"){
        stausText = "Online";
    }
    const imagePath = new URL(imgFolder + props.coverImg, import.meta.url).href;
    return (
            <>
            <a className="card--link" href={props.hrefLink}>
                <div className="cards-block">
                    <div className="cards--img-sec">
                        {   
                            stausText &&
                            <span className="cards--status-div">
                                {stausText}
                            </span>
                        }
                        <img src={imagePath} alt="Katie stading and smiling" className="cards--img" />
                    </div>
                    <div className="cards--reviews-div">
                        <img src={starIcon} alt="star icon" />  
                        <span id="cards--reviews-rating">{props.stats.rating.toFixed(1)} </span>  
                        <span className="cards--reviews-color"> 
                            (<span id="cards--reviews-numbers">{props.stats.reviewCount}</span>) • <span id="cards--reviews-country">{props.location}</span>
                        </span>    
                    </div>
                    <div className="cards--lesson-div">
                        <h2 id="cards--lesson-text">{props.title}</h2>
                    </div>
                    <div className="card-price-div">
                        <p><span className="cards--price-bold">From $<span id="card--price-rate">{props.price}</span></span> / {props.per}</p>
                    </div>
                </div>
            </a>
        </>    
    )
};
