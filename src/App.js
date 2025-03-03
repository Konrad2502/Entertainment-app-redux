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
import Content from "./components/Content/Content";
import SearchInput from "./components/SearchInput/SearchInput";
import SignModal from "./components/SingModal/SignModal";


function App() {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchData()); 
  }, [dispatch]);

  return (

    <Router>
    <Container>
      <Nav/>
      <Content>
        <SearchInput/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/tvseries" element={<TvSeries/>}/>
        <Route path="/bookmark" element={<Bookmark/>}/>
      </Routes>
      </Content>
    </Container>
    <SignModal/>
    </Router>
   
  );
}

export default App;
