import "./projectList.css"
import Projects from "../projects/projects"
import {projects_data} from "../../projects"
const ProjectList=()=>{
    return(
        <div className="pl">
            <div className="pl-texts">
                <div className="pl-title">Projects</div>
                <div className="pl-desc">
                    Projects made by me
                </div>
                <div className="pl-list">
                    {projects_data.map((items)=>(
                        <Projects key={items.id} Name={items.Name} Url={items.url} Status={items.status} About={items.about}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectList;