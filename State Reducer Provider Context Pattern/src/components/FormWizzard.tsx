import useFormWizzard from '../hook/useFormWizzard'

const FormWizzard = () => {
  const { state, dispatch } = useFormWizzard()

  const handleNextStep = () => {
    dispatch({type: 'NEXT_STEP'})
  }

  const handlePrevStep = () => {
    dispatch({type: 'PREV_STEP'})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'UPDATE_DATA', payload: {name: e.target.name, value: e.target.value}})
  }

  const handleSubmit = () => {

  }

  return (
    <div className="">

    <form onSubmit={handleSubmit}>
        {state.step === 1 && (
            <>
                <label htmlFor='text1'>First</label>
                <input name='text1' type='text' onChange={handleChange} />
            </>
        )}

        {state.step === 2 && (
            <>
                <label htmlFor='text2'>Seccond</label>
                <input name='text2' type='text' onChange={handleChange} />
            </>
        )}

        {state.step === 3 && (
            <>
                <label htmlFor='text3'>Third</label>
                <input name='text3' type='text' onChange={handleChange} />
                <button type='submit'>-- SUBMIT --</button>
            </>
        )}
    </form>

    <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <button onClick={handlePrevStep}> {'<-'} Prev</button>
        <button onClick={handleNextStep}> Next {'->'}</button>
    </div>

    </div>
  )
}

export default FormWizzard