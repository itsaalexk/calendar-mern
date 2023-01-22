


const style ={
    borderRadius:"100%",
    bottom:'25px',
    fontSize:'17px',
    padding: '25px',
    position:'fixed',
    right:'30px'
}

export const Fab = () => {
  return (
    <button className="btn btn-primary" style={style}>
        <i className="fas fa-plus"></i>
    </button>
  )
}
