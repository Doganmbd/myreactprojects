Router 

npm install react-router-dom

1- tüm route larımızı BrowserRouter kapsayacak şekilde Routes larımızın içine koyuyoruz.

2- yapımız en basit haliyle aşağıdaki gibidir.
<BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element = {<Home/>}> 
        <Route path="/about" element = {<About/>}> about sayfasına gider
        <Route path="*"  element = {<Error/>}>    url yanlış girilirse
    </Routes>    
</BrowserRouter>    

3-Router hooks = useNavigate , useParams, useLocation

4-link ve a tagi arasındaki fark a tagi ile sayfa render olur ama link ile sayfa tekrardan render yapmaz.

5- link ve Navlink arasında ise , Navlink ( anchor tag ) stil verebiliriz ama link i component olarak react-router dan çektiğimiz için stil yapamıyoruz.

6-link to="/" şeklindedir.

7- fetch ile fakeapi den ürünlerimizi çekiyoruz.useEffect kullandım.

8-consola yazdıramadığımız şeyleri network içinde attığımız istekleri görebiliriz.

9- to={`/details`} şeklinde olursa url miz localhost:3000/details e gider ama to={`details`} bu şeklinde olursa localhost:3000/.../details şeklinde olur. yani devamına ekler .

10-<Route path="products/details/Id" element={<Details />} /> bu şekilde url de localhost:3000/products/details/id gelirse Details sayfasına git demek ama ben öyle istemiyorum Id yerine ne gelirse gelsin Details sayfasına göndermek istiyorum bu yüzden :ID şeklinde yapmalıyım.Dinamik şekilde oluşturmuş oldum.

11- navigate(-1) dersem önceki sayfaya yönlendirmiş olur.

12-useNavigate : Belirli URL'ye, ileri veya geri sayfalara gitmeye yardımcı olur.

import { useNavigate } from 'react-router-dom';

export function GoHome() {
  let navigate = useNavigate();
  const handleClick = e => {
    e.preventDefault();
    navigate('/home');
  }
  return <button onClick={handleClick}>Go to Home</button>
}

13-useParams:  URL parametrelerinin anahtar/değer çiftlerinden oluşan bir nesne döndürür. yani Url de kullandığımız tüm parametreleri bana getirir. 

path="products/details/:Id burada : dan sonrasındakini parametre olarak algılar. 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
    </Switch>
  </Router>,
  node
);

14-useLocation : sayfalar arası bilgi gönderme yapar.

import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <Button type="button" onClick={handleClick}>
      Go home
    </Button>
  );
}