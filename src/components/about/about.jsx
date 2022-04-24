import "./about.css"
import Me from "../../images/img2.jpg"
import Achieve from "../achievements/achieve"
import { certs } from "../../cert"
const About=()=>{
    return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Me} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <div className="a-right-wrapper">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I am Bikram Ghuku and I currently study at DAV Model School
                </p>
                <p className="a-desc">
                    I am student from West Bengal currently studying in Std XII with PCM/CS.
                    In the below sections you will find more about my skills. You will also 
                    be able to find projects that I am currently working on or are completed.
                </p>
                <div className="a-award">
                    {certs.map((items)=>(
                        <Achieve key={items.id} Name={items.name} Url={items.url} imgUrl={items.imgUrl}/>   
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
}
export default About;