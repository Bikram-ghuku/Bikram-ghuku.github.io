import "./education.css"
const Education = ({Name, Years})=>{
    return(
        <div className="e">
            <div className="e-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <div className="e-name">
                {Name}
            </div>
            <div className="e-years">
                {Years}
            </div>
        </div>
    )
}

export default Education;