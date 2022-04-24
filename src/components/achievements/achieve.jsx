import "./achieve.css"
const Achieve=({Name, imgUrl, Url})=>{
    return(
        <div className="c">
            <img src={imgUrl} alt="" className="award-img"/>
            <div className="text">
                <div className="title">
                    {Name}
                </div>
                <a href={Url} className="url">View Certificate</a>
            </div>
        </div>
    )
}

export default Achieve;