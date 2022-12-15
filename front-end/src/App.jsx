import React, {useState, useEffect} from "react";
import AppRoutes from './AppRoutes';
import Navigation from "../components/Navigation";

function App() {
  const [username, setVerified] = useState('');
  
  useEffect(() => {(
        async () => {
          const response = await fetch('http://localhost:5183/api/user',{
          headers: {'Content-Type' : 'application/json'},
          credentials: 'include',
          });
          const content = await response.json();

          setVerified(content.username);
        })();
  });
  return (
    <>
    <Navigation username = {username}/>
      <div className="d-flex justify-content-center p-2 m-3">
        <AppRoutes username = {username}></AppRoutes>
      </div>
    </>
  );
}

export default App;
