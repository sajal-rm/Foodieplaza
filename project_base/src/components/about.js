import User from "./user.js";
import UserClass from "./UserClass.js"
const About =()=>{
    return (
        <div className="about">
            <h1>about me </h1>
            <User name={"Sajal gupta"}/>
            <UserClass name ={"Prakhar gupta"}/>
        </div>
    )
}
export default About;