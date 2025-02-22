import Container from "./components/Container/Container";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./features/dataSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import TvSeries from "./components/TvSeries/TvSeries";
import Bookmark from "./components/Bookmark/Bookmark";


function App() {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchData()); 
  }, [dispatch]);

  return (

    <Router>
    <Container>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/tvseries" element={<TvSeries/>}/>
        <Route path="/bookmark" element={<Bookmark/>}/>
      </Routes>
    </Container>
    </Router>
   
  );
}

export default App;
