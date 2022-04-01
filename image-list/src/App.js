
import './App.css';
import SearchInput from './component/SearchInput';

function App() {

  const onSearchSubmitApp = (app)=> {
    console.log(app)
  }


  return (
    <div className="ui container" style = {{marginTop:"30px"}}>
      <SearchInput  onSearchSubmit={onSearchSubmitApp}/>
    </div>
  );
}

export default App;
