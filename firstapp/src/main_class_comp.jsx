import React from 'react';
import { createRoot } from 'react-dom/client'

class Home extends React.Component {
  render() {
    return (
      <>
        <h3>Welcome to React Component!!</h3>
        <h3>Happy Learning!!</h3>
      </>
    )
  }
}
createRoot(document.getElementById('root')).render(<Home></Home>);
