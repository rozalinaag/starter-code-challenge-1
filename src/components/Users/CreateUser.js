import styles from './CreateUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import React, {useState} from 'react';
import ErrorModal from '../UI/ErrorModal';

const CreateUser = (props) =>{

  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [error, setError] = useState();

  const CreateUserHandler = (event) => {
    event.preventDefault();

    if (inputName.trim().length === 0 || inputAge.trim().length === 0){
      setError({
        title: 'Invalid input name', 
        message: 'These field can`t be empty',
      })
      return;
    }
    if (inputAge <1){
      setError({
        title: 'Invalid input age', 
        message: 'These field can`t be less then zero',
      })
      return;
    }
    
    props.onCreateUser(inputName, inputAge)
    setError(undefined);
    setInputAge("");
    setInputName("");
  }

  const errorHandler = () => {
    setError(false);
  }

  return (
    <div>
      {error && <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message}/> }
      
      <Card className={styles.input}>
        <form onSubmit={CreateUserHandler}>
          <label htmlFor="name">Name</label>
          <input  id= "name" type="text" value={inputName} onChange={(event) => setInputName(event.target.value)}/>
          <label htmlFor="age">Age</label>
          <input  id= "age" type="text" value={inputAge} onChange={(event) => setInputAge(event.target.value)}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>)
};

export default CreateUser;