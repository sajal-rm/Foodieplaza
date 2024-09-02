import { useRouteError } from "react-router-dom";// it gives us more info about error , taht we are facing , specific details baout error , why its comign 

const Error=()=>{
    const err=useRouteError();
console.log(err)
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Something went wrong </h2>
            <h3>{err.status}</h3>
            <h3>{err.statusText}</h3>
        </div>
    )
}
export default Error;