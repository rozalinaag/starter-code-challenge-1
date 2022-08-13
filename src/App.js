import CreateUser from './components/Users/CreateUser';
import UserList from './components/Users/UserList';
import React, { useState } from 'react';


const App = () => {
  const [userList, setUserList] = useState([]);


  return (
    <div>
      <CreateUser onCreateUser = {(name, age) => { 
        setUserList((prevUserList) => {
          return [ ...prevUserList, {name: name, age: age, id: Math.random().toString()}];
        })
      }}/>
      <UserList users = {userList}/>
    </div>
  );
};

export default App;
