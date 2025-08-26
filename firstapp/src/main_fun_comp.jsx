import { createRoot } from 'react-dom/client'

function Home(){
  return (
    <>
    <h3>Welcome to React Component!!</h3>
    <h3>Happy Learning!!</h3>
    </>
  )
}
createRoot(document.getElementById('root')).render(<Home></Home>);
