import React from 'react'

const BasicForm = () => {
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)

        if(formData.get('firstName') === '' || formData.get('lastName') === '') {
            alert('Please fill in all fields')
            return
        }

        console.log('First Name:', formData.get('firstName'))
        console.log('Last Name:', formData.get('lastName'))
    }
  
    return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='First Name' name='firstName' />
        <input type="text" placeholder='Last Name' name='lastName' />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default BasicForm