const styles = {
 background: 'linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)',
 color:'#fff',
 minHeight: '100vh',
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center'
 
}

export const Hero = (props) => {
  return (
    <div style={styles}>
        <h1>{props.text}</h1>
    </div>
  )
}
