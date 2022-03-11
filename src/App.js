import './App.css';
import {useState} from 'react';
import {useSigninUserMutation} from './store/services/authApi';
import { useSelector } from 'react-redux';

//  import {useDispatch} from 'react-redux';

function App () {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  // const isAuthenticated = useSelector((state) => state)
  const [signinUser, {data, isLoading}] = useSigninUserMutation ();
// console.log({isAuthenticated})
  //  const dispatch = useDispatch ();
  (data && isLoading) && console.log ({data, isLoading});
  const handleSignin = async e => {
    e.preventDefault ();
    const body = {
      email,
      password
    };
    const response = await signinUser (body);
     
    
   
    console.log (response);
  };

  return (
    <div className="App">
      <input
        type="email"
        onChange={e => setEmail (e.target.value)}
        
        placeholder="Enter your name"
      />
      <input
        type="password"
        onChange={e => setPassword (e.target.value)}
      
        placeholder="Enter your password"
      />
      
      <button onClick={handleSignin}>Sign in</button>
      {isLoading && <p>Loading...</p>}
    
      {/* <p>{isAuthenticated ? "True": "false"}</p> */}

    </div>
  );
}

export default App;
