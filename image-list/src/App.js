import {useState} from "react";
import './App.css';
import SearchInput from './component/SearchInput';
import axios from "axios" ;
import Image from "./component/Image";

function App() {

  const [images,setImages] = useState([])

  const onSearchSubmitApp = async (app)=> {
    console.log(app)
    const response = await axios
    .get(`https://pixabay.com/api/?key=26444801-82634f94acd212e69e41c3cae&q=${app}&image_type=photo`)
    console.log(response.data.hits)
    setImages(response.data.hits)
  }


  return (
    <div className="ui container" style = {{marginTop:"30px"}}>
      <SearchInput  onSearchSubmit={onSearchSubmitApp}/>
      <h2 class="ui center aligned icon header">we have {images.length} images</h2>
      <Image imagesProps = {images}/>
    </div>
  );
}

export default App;
