import './App.css';
import Card from './card';
import './card.css';
import React from 'react';
import { useState } from 'react';



function App() {
  return(
  <>
  <Card/>
  </>)
}
export default App;

//   const [myarray , setmyarray] = useState([1,2,3,4])
//   const x = ()=>{
//   var z = prompt('enter num')
//   setmyarray((prevArray)=>{
//   const arr = [...prevArray];
//   arr[0] = z;
//   return arr

//   });
// }}
//     setmyarray((prevArray) =>[...prevArray,myarray[0]=]);

//   };
// }
  

  // const[student,setStudent] = useState({name:'raj',branch:'aids',dep:'cse'});
  // const updateName = ()=>{
  //   setStudent(prevStudent =>({...prevStudent,name:'jaya lova raju'}));

  //   }
  // }



  // return (
  //   <>
  //   {student.name}
  //   <button onClick={updateName}>Click me </button>


  //   {/* {
  //     myarray.map((ele,index) => {
  //       return <h1 key={index}>{ele}</h1>
  //     })
  //   } */}
  //   </>
  // )

// export default App;









// import React, { useState,useEffect } from "react";

// function StudentComponent() {

//   const[age,setAge] = useState([]);
//   const Fun = ()=>{
//     const x = prompt('enter age');
//     if(x<18){
//       alert("not eligible");
//     }
//     // setAge((prevage)=>[...prevage,x]);
//     setAge(x);
//   }

//   useEffect(()=>{
//     const vv = console.log("eligible");
//   },[age])



//   return (
//     <>
//     <div>
//       <p>Your age is :{age}</p>
//       <button onClick={Fun}>click me</button>
      
      
//     </div>
    
//     </>
//   );
// }


// export default StudentComponent;












// var[nam,setNam] = useState('');
//   const x = ()=>{
//     var name = prompt("enter name");
//     setNam((prevnam)=>[...prevnam,name]);
//     console.log(nam)
//   }



