import { useState } from 'react'

function LessText({maxLength, text}) {
  

  const [hidden, setHidden] = useState(true)

  if(text.length <= maxLength) {
    return <span>{text}</span>
  }

  return (
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
      {hidden ? (
        <a href="#" onClick={() => setHidden(false)}>Ler mais</a>
      ) : (
        <a href="#" onClick={() => setHidden(true)}>Ler menos</a>
      )}
    </span>
  )
}

export default LessText