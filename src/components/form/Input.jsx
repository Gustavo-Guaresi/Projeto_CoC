import styles from './Input.module.css'

function Input({type, name, text, placeholder, handleOnChange, value}){
    return (
        <div className={styles.input_dice}>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}/>
        </div>
        
    )
}

export default Input