import { useRef } from 'react'

const UncontrolledForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const firstName = firstNameRef.current?.value
    const lastName = lastNameRef.current?.value

    if(!firstName) {
        firstNameRef.current?.focus()
        return
    }

    if(!lastName) {
        lastNameRef.current?.focus()
        return
    }

    console.log('First Name:', firstName)
    console.log('Last Name:', lastName)
  }

  return (
   <form onSubmit={handleSubmit}>
        <input type="text" placeholder='First Name' ref={firstNameRef} />
        <input type="text" placeholder='Last Name' ref={lastNameRef} />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default UncontrolledForm