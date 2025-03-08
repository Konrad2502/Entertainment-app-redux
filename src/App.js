import Container from "./components/Container/Container";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./features/dataSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import TvSeries from "./components/TvSeries/TvSeries";
import Bookmark from "./components/Bookmark/Bookmark";
import Content from "./components/Content/Content";
import SearchInput from "./components/SearchInput/SearchInput";
import SignModal from "./components/SingModal/SignModal";
import Details from "./components/Details/Details";


function App() {

  const [isItemVisible, setIsItemVisible] = useState(false);
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
        <Route path="/" element={<Home setIsItemVisible={setIsItemVisible}/>}/>
        <Route path="/movie" element={<Movie setIsItemVisible={setIsItemVisible}/>}/>
        <Route path="/tvseries" element={<TvSeries setIsItemVisible={setIsItemVisible}/>}/>
        <Route path="/bookmark" element={<Bookmark setIsItemVisible={setIsItemVisible}/>}/>
      </Routes>
      </Content>
    </Container>
    {isItemVisible && <Details setIsItemVisible={setIsItemVisible} isItemVisible={isItemVisible} />}
    <SignModal/>
    </Router>
   
  );
}

export default App;
