const ErrorMessage = ({ message }: { message: string | null }) => {
  return (
    <div>ErrorMessage: {message || 'An error occured'}</div>
  )
}

export default ErrorMessage