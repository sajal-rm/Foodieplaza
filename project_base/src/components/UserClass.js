  import React from "react"
  class UserClass extends React.Component{

//along with constructor , state is also created with creating of instance of class and state are created inside constructor 
    constructor(props) {//in func component , when we pass are passing info , props comes as argument in func component
      super(props);// while in classs based compoent , props are passed in constructor and in that we must ahve to use super prop ,without super prop , will give error and in the class we aloways have to use this keyword to access functionilits of class 
      console.log(props)
      this.state={// we need not to create different state varuable ,herethis state is a big object , contained specs of all the state variables 
        count:0,
// never directly update your state variables 
      };
    }



    // this is way to create cllass based components , 
    // here userclass is class name , while extends react.components will make react to know that this is a class based component ,hence class based compoenet createed and react.compoenet is coming from react
    render(){// here render is used for class based compoent ,and this will return jsx component , hence combined alll the code called class based compoent
      
return (
<div className="user-card">
  <h1>number : {this.state.count}</h1>
  <button onClick={()=>{this.setState(
    {
      count:this.state.count+1 //for changing value of any state variable , we have to use this.setstate , inthis we have to create a oject in that we will creeate will that state variable a value which we want 
    }
  )}}>click me</button>
  {/* thats how state values are taken in use  */}
        <h2> {this.props.name} </h2>
        {/* this way we are accessing props in class based compoent 
        whenever instance of this class is created , constructor is called , this props is exrracted from anywehre in class  */}
        <h3>Location:Dehradun</h3>
        <h4>Contact:@sajal</h4>
    </div>
    );
        };
// funct component is a fucntion , returns a peice of jsx
// a class based componed is class which extends react comonent (to react know abot class component) and rendr method returning peices of jsx 
  }
  export default UserClass ;