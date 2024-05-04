import './button.css'

const Button = (props) => {
    const {type, title, onClick} = props;
  return (
    <button  className={`btn ${
        (type == 'add' && 'add') || 
        (type == 'remove' && 'remove') || 
        (type == 'checkkout' && 'checkout')} `} 
        onClick={onClick} >
      {title}
    </button>
  )
}

export default Button
