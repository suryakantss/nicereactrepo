import React from 'react';
import { createRoot } from 'react-dom/client'

function Profile(props) {
  let msg="This is Profile Component";
  return (
    <>
      <h4>{msg}</h4>
      <h4>{props.name},{props.email}</h4>
    </>
  )
}

class Weather extends React.Component {
  msg="This is Weather Component";
  render() {
    return (
      <>
        <h4>{this.msg}</h4>
        <h4>{this.props.city},{this.props.weather}</h4>
      </>
    )
  }
}
createRoot(document.getElementById('root')).render(
  <div>
    <Profile name="John" email="john@msn.com"></Profile>
    <hr />
    <Weather city="Pune" weather="raining"></Weather>
  </div>
);
