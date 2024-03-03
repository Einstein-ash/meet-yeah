import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Room from "./pages/Room/Roompage";

function App() {
  return (
   
    <Routes>
     <Route path="/" element ={<Home/>}></Route>
     <Route path="/room/:roomId/:name" element ={<Room/>}></Route>
    </Routes>

  );
}

export default App;
