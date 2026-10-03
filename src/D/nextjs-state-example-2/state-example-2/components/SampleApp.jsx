import { useState } from 'react'

export default function SampleApp() {

  const [clicked, setClicked] = useState(0);

  const clickHandler = (event) => {
    let newClickedValue = clicked + 1;
    setClicked(newClickedValue);
  }

  return (
    <div>
      <p>clicked {clicked} times </p>
      <button
         onClick={(event)=> clickHandler(event)}>
          Ultimate Clicker
      </button>
    </div>
  );
}
