
import { lazy, Suspense } from 'react';
import './App.css'
import { Home } from './components/home/home';
import { Link, Route, Routes } from 'react-router';

const Profile = lazy(() => import('./components/profile/profile'));
const CalcClass = lazy(() => import('./components/calc/calcclass'));
const Calc = lazy(() => import('./components/calc/calc'));
const Movies = lazy(() => import('./components/movies/movies'));

function App() {
  return (
    <>
      <div>
        <Link to=''>Home</Link>
        <Link to='profile'>Profile</Link>
        <Link to='calcfun'>Calc (fun)</Link>
        <Link to='calcclass'>Calc (class)</Link>
        <Link to='movies'>Movies</Link>
      </div>
      <div>
        <Suspense fallback={<div>loading.....</div>}>
          <Routes>
            <Route path='' element={<Home></Home>} ></Route>
            <Route path='profile' element={<Profile></Profile>} ></Route>
            <Route path='calcfun' element={<Calc></Calc>}></Route>
            <Route path='calcclass' element={<CalcClass></CalcClass>}></Route>
            <Route path='movies' element={<Movies></Movies>}></Route>
          </Routes>
        </Suspense>
      </div>
    </>

  )
}

export default App
