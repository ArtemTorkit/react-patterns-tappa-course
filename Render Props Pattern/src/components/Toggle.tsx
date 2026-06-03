import React from 'react'

const Toggle = ({children}: {children: (isOpen: boolean)=> React.ReactNode}) => {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div>
        <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'ON' : 'OFF'}
        </button>
        {children(isOpen)}
    </div>
  )
}

export default Toggle