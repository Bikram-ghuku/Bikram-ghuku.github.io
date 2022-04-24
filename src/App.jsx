import About from "./components/about/about";
import Contacts from "./components/contacts/contacts";
import EducationList from "./components/educationList/educationList";
import Intro from "./components/intro/intro";
import ProjectList from "./components/projectList/projectList"
const App = () => {
  return (
    <div>
    <Intro/>
    <About/>
    <EducationList/>
    <ProjectList/>
    <Contacts/>
    </div>
    );
};

export default App;