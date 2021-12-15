import { useEffect, useRef } from 'react';

const ComponentRef = () => {

  const inputElement = useRef(null);
  
  useEffect(() => { 
    inputElement.current.focus();
  },[])

  const handleClick = (event) => {
    console.log(event)
    inputElement.current.focus()
  }

  return (
    <>
      <input ref={inputElement} type="text"/>
      <button onClick={handleClick}>Focar no input</button>
    </>
  )
};

export default ComponentRef