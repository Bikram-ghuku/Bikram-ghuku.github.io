import "./educationList.css"
import Education from "../education/education"
import {education_data} from "../../education"
const EducationList=()=>{
    return(
        <div className="el">
            <div className="el-texts">
                <h1 className="el-title">Education </h1>
                <div className="el-desc"></div>
                <div className="el-list">
                    {education_data.map((item)=>(
                        <Education key={item.id} Name={item.Name} Years={item.Years}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EducationList