import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Followers from "./views/followers/Followers";
import SingleUser from "./views/singleUser/SingleUser";
import Following from "./views/following/Following";
import Repositories from "./views/repo/Repositories";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/users/:name/repos" exact element={<Repositories />}/>
      <Route path="/users/:name/followers" exact element={<Followers />}/>
      <Route path="/users/:name/following" exact element={<Following />}/>
      <Route path="/users/:userName" exact element={<SingleUser />}/>               
      </Routes>
   </BrowserRouter> 
  );
}

export default App;
