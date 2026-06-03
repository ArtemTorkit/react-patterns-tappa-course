import {useState, useRef} from 'react'

const ControlledForm = () => {
    const [formData, setFormData] = useState({firstName: '', lastName: ''})

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if(!formData.firstName) {
            firstNameRef.current?.focus()
            return
        }

        if(!formData.lastName) {
            lastNameRef.current?.focus()
            return
        }

        console.log('First Name:', formData.firstName)
        console.log('Last Name:', formData.lastName)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='First Name' name='firstName' 
        ref={firstNameRef}
        value={formData.firstName} onChange={handleChange}/>
        <input type="text" placeholder='Last Name' name='lastName' ref={lastNameRef} value={formData.lastName} onChange={handleChange}/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default ControlledForm