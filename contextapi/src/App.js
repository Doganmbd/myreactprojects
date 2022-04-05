import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App" style={{ marginTop:"100px" }}>
      <Container maxWidth="sm" >
        <Navbar />
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
