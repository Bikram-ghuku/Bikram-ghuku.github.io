import "./intro.css"
import Me from "../../images/me.jpg"
const Intro=()=>{
    return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is </h2>
                <h1 className="i-name">Bikram Ghuku</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Learning Web Developer</div>
                        <div className="i-title-item">Programmer</div>
                        <div className="i-title-item">Student</div>
                        <div className="i-title-item">Learning Software Developer</div>
                    </div>
                </div>
                <div className="i-desc">
                    I am a student from West Bengal, India who loves to code.
                    I have been learning coding from 2017. 
                    I know to program in python/javascript/PHP/MySQL.
                </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
        </div>
    </div>
    )
}

export default Intro