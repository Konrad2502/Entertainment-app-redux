import Container from "./components/Container/Container";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./features/dataSlice";


function App() {
  const dispatch = useDispatch(); // Pobieramy funkcję do wysyłania akcji

  useEffect(() => {
    dispatch(fetchData()); // Pobieramy dane na start
  }, [dispatch]);

  return (
    <Container>
      <Nav/>
      <Home/>
    </Container>
  );
}

export default App;
