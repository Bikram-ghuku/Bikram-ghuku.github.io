import "./projects.css"

const Projects=({Name, Url, About, Status})=>{
    return(
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <div className="p-name">
                {Name}
            </div>
            <div className="p-about">
                {About}
            </div>
            <div className="p-status">
                Status: {Status}
            </div>
            <a href={Url}><button className="p-button">View Project</button></a>
        </div>
    )
}

export default Projects;