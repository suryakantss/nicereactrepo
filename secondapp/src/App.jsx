
import './App.css'
import { Calc } from './components/calc/calc'
import { CalcClass } from './components/calc/calcclass'
import { Home } from './components/home/home'
import { Movies } from './components/movies/movies'
import { Profile } from './components/profile/profile'
function App() {
   return (
    <>
    <Home></Home>
    <hr />
    <Profile></Profile>
    <hr />
    <Movies></Movies>
    <hr />
    <Calc></Calc>
    <hr />
    <CalcClass></CalcClass>
    </>

  )
}

export default App
