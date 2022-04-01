import {useState} from "react";
import './App.css';
import SearchInput from './component/SearchInput';
import axios from "axios" ;

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
      we have {images.length} images
      <div>
        {images.map((item) => {
          return (
          <ul>
            <li>
              <img src={item.webformatURL} alt="" /> 
            </li>
          </ul>
          )
        })}
      </div>
    </div>
  );
}

export default App;
