
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
function Adduser(){
    return(<div className="users pb-3">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"></link>
    <div className="row p-0 m-0 p-4">
        <h3 className="col-12 m-0">Add new user</h3>
    </div>
    <hr/>
    <form>
    <div className='user-form p-4 my-5 mx-auto  '>
        <div className='row'>
        <div className='col-12'>
        <p>user email</p>
        <input type='email' className='w-100' placeholder='example@email.com'></input>
        </div>
        <div className='col-12'>
        <p>username</p>
        <input type='text' className='w-100' placeholder='type unique username'></input>
        </div>
        <div className='col-sm-12 col-md-6'>
        <p >password</p>
        <input type='password'  placeholder='******************'></input>
        </div>
        <div className='col-sm-12 col-md-6'>
        <p >repeat password</p>
        <input type='password'  placeholder='******************'></input>
        </div>
        </div>
        <button className='d-block create px-5 py-2 mt-5'>create user</button>
       
    </div>
    </form>
    </div>
    )
}
export default Adduser;