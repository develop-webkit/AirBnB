import heroImg from "../assets/images/hero-sec.png"

export default function Hero(){
    return (
        <div className="hero-sec">
            <div>
                <img className="hero-img" src={heroImg} alt="" />
            </div>
            <div>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
};