import './App.css';
import {addUser, deleteUser, updateUser} from './features/User';
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react';

function App() {

  const dispatch = useDispatch();
  const userList = useSelector((state)=> state.users.value)

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newusername, setNewusername] = useState("");

  return (
    <div className="App">
      <header>
        <h1>Redux - CRUD</h1>
      </header>
      <main>
        <div className="Add_User">
          <input type="text" placeholder='Name..' onChange={(e)=>{setName(e.target.value)}} />
          <input type="text" placeholder='Username..' onChange={(e)=>{setUsername(e.target.value)}} />
          <button onClick={()=>{dispatch(addUser({
                id: userList[userList.length -1].id +1,
                name,
                username,
              })
            )}}>Add User</button>
        </div>
        <div className="Display_User">
          {userList.map((user,id)=>{
            return(
              <div className="User" key={id}>
                <h4>{user.name}</h4>
                <h3>{user.username}</h3>
                <input type="text" placeholder='new username..' onChange={(e)=>{setNewusername(e.target.value)}} /> <br />
                <button onClick={()=>{dispatch(updateUser({id: user.id, newusername: newusername}))}}>Update User</button>
                <button onClick={()=>{dispatch(deleteUser({id : user.id}))}}>Delete User</button>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
