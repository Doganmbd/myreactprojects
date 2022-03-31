import React , {useState,useEffect} from 'react' ;
import axios  from  "axios";


const Users = () => {

    const[user,setUser] = useState([]);

// sayfa ilk render olduğunda user ları direk çekmek için.

useEffect (()=> {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => setUser(res.data))
    .catch(err => console.log(err))

},[])


/*     const getUser = ()=> {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        // .then(res => console.log(res))
        .then(res => setUser(res.data))
        .catch(err => console.log(err))

    } */
  return (
    <div className="users">
        <h2>users</h2>
            {/* <button onClick={getUser}>Get users</button> */}
        <div className="users-cards" >
            {user.map((item) => {
                return (
                    <div className="useritem" key ={item.id}>
                        <img className="image" src={`https://avatars.dicebear.com/v2/avataaars/${item.id}.svg`} alt="" />
                        {item.name}
                    </div>
                );
            } )} 
        </div>

    </div>
  )
}

export default Users;