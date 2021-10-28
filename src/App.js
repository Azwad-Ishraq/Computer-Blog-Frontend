
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddBlog from './components/AddBlog/AddBlog';
import Navbar from './components/Navbar/Navbar';
// import Header from './components/Header/Header'
import Posts from './components/Blogs/Blogs';
import Login from './components/Login/Login';
import BlogDetails from './components/BlogDetails/BlogDetails';
import EditBlog from './components/EditBlog/EditBlog';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar></Navbar>
    
     <Switch>
       <Route exact path='/'>
        <Posts></Posts>
       </Route>
       <Route path='/blogs'>
        <Posts></Posts>
       </Route>
       <Route path='/login'>
        <Login></Login>
       </Route>
       <Route path='/addBlog'>
         <AddBlog></AddBlog>
       </Route>
       <Route path='/blog/:blogId'>
         <BlogDetails></BlogDetails>
       </Route>
       <Route path='/blogEdit/:blogId'>
        <EditBlog></EditBlog>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
