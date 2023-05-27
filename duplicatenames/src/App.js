import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react"

const data = [
  {
    name: "Ram",
  },
  {
    name: "Ram",
  },
  
  {
    name: "Ramesh",
  },
  {
    name: "Ramesh",
  },
  {
    name: "Ramesh",
  },
  {
    name: "Ramesh",
  },
  {
    name: "Raj",
  },
  {
    name: "Raj",
  },
  {
    name: "Raj",
  },
  {
    name: "Raj",
  },
  {
    name: "Raj",
  },
  {
    name: "Raj",
  },
  {
    name: "Raj",
  },
  {
    name: "Raj",
  },
  {
    name: "Raj",
  },
  {
    name: "Raj",
  },
  {
    name: "Raj",
  },
];
function App() {

  const [sortedData, setsortedData] = useState([])

  useEffect(() => {
    
    let map1 = [{}]

    for(let i = 0; i<data.length;i++){
      //console.log(item.name)
        let isPresent  = map1.findIndex(item=> item["name"] == data[i].name)
       if(isPresent !== -1){
        console.log(isPresent)
        let value = map1[isPresent].count
        map1[isPresent].count =  value + 1
        
        if(value + 1 >=3 && value + 1 <10){
       map1[isPresent].color =  "yellow" 
        }
        else if ( value + 1 > 10){
       map1[isPresent].color =  "green"
        }
       }
       else if(isPresent == -1){
        let obj = {
          name : data[i].name,
          count :1,
          color: "red"
        }
        map1.push(obj)
       }
    }
    console.log(map1)
    setsortedData(map1)
  
    
  }, [])
  

  return <div className="App">
    <div>
    <table>
      <thead>
      <tr>
        <th>name</th>
        <th>count</th>
      </tr>
      </thead>
      <tbody>
        {sortedData.map((item,i)=>{
      return (<tr key={i}>
        <td bgcolor={item.color}>{item.name}</td>
        <td bgcolor={item.color}>{item.count}</td>
      </tr>)
        })}
      </tbody>
    </table>
    </div>
  </div>;
}

export default App;
