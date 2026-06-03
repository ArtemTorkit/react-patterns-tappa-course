const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      {children}
    </div>
  )
}

const CardHeader = ({children}: { children: React.ReactNode }) => {
    return (
        <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
            {children}
        </div>
    )
}

const CardBody = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}

const CardFooter = ({children}: { children: React.ReactNode }) => {
    return (
        <div style={{ borderTop: '1px solid #ccc', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
            {children}
        </div>
    )
}

const CardImage = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <img src={src} alt={alt} style={{ width: '100%' }} />
    )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
Card.Image = CardImage

export default Card