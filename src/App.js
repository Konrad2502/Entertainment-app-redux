import Container from "./components/Container/Container";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./features/dataSlice";


function App() {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchData()); 
  }, [dispatch]);

  return (
    <Container>
      <Nav/>
      <Home/>
    </Container>
  );
}

export default App;
