// import logo from './logo.svg';
import './App.css';

function App() {
  const brand=["Samsung","HTC","Micromax","Apple"];
const oprt = ["Android", "Blckberry", "iPhone", "WindowsPhone"];
  return (
    <div>
   <div>
     <h1>Mobile Operating System</h1>
     <ul>
       {
         brand.map((e) => {
           return <Manu menu={e}/>
         })
       }
     </ul>
   </div>
   <div>
     <h1>Mobile Manufacturers</h1>
     <ul>
     {
         oprt.map((e) => {
           return <Manu menu={e}/>
         })
       }
     </ul>
   </div>
   </div>
  
  );
}


function Manu({menu}) {
    return <li>{menu}</li>
}

export default App;
