import styles from './CreateUser.module.css';
import Card from '../UI/Card';


const CreateUser = (props) =>{

  const CreateUserHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <Card className={styles.input}>
        <form onSubmit={CreateUserHandler}>
          <label htmlFor="name">Name</label>
          <input  id= "name" type="text"/>
          <label htmlFor="age">Age</label>
          <input  id= "age" type="text"/>
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>)
};

export default CreateUser;