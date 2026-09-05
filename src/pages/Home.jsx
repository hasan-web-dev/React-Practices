import { signOut, getAuth } from 'firebase/auth'
import app from '../firebase/config';

const auth = getAuth(app);

const Home = () => {
  const logoutHandler = () => {
    signOut(auth)
  }
  return (
    <div className='bg-red-500 flex justify-center h-148 font-bold'>
      <h1 className='text-7xl text-white '>
        Home
      </h1>
      <br />
      <button onClick={logoutHandler} className='p-5 bg-blue-600 text-white text-4xl'>Logout</button>
    </div>
  )
}

export default Home