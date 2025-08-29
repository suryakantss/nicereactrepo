
import { lazy, Suspense } from 'react';
import './App.css'
import { Home } from './components/home/home';
import { Link, Route, Routes } from 'react-router';

const Profile = lazy(() => import('./components/profile/profile'));
const CalcClass = lazy(() => import('./components/calc/calcclass'));
const Calc = lazy(() => import('./components/calc/calc'));
const Movies = lazy(() => import('./components/movies/movies'));
const SignIn = lazy(() => import('./components/signin/signin'));
const SignUp = lazy(() => import('./components/signup/signup'));
const Parent = lazy(() => import('./components/parent/parent'));
const Blog = lazy(() => import('./components/blog/blog'));
const Users = lazy(() => import('./components/users/users'));




function App() {
  return (
    <>
      <div>
        <Link to=''>Home</Link>
        <Link to='profile'>Profile</Link>
        <Link to='calcfun'>Calc (fun)</Link>
        <Link to='calcclass'>Calc (class)</Link>
        <Link to='movies'>Movies</Link>
        <Link to='signin'>SignIn</Link>
        <Link to='signup'>SignUp</Link>
        <Link to='parent'>Parent</Link>
        <Link to='blog'>Blog</Link>
        <Link to='users'>Users</Link>
        
      </div>
      <div>
        <Suspense fallback={<div>loading.....</div>}>
          <Routes>
            <Route path='' element={<Home msg="Welcome"></Home>} ></Route>
            <Route path='profile' element={<Profile></Profile>} ></Route>
            <Route path='calcfun' element={<Calc></Calc>}></Route>
            <Route path='calcclass' element={<CalcClass></CalcClass>}></Route>
            <Route path='movies' element={<Movies></Movies>}></Route>
            <Route path='signin' element={<SignIn></SignIn>}></Route>
            <Route path='signup' element={<SignUp></SignUp>}></Route>
            <Route path='parent' element={<Parent></Parent>}></Route>
            <Route path='blog' element={<Blog></Blog>}></Route>
            <Route path='users' element={<Users></Users>}></Route>
            
          </Routes>
        </Suspense>
      </div>
    </>

  )
}

export default App
