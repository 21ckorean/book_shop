import React from 'react'
import styles from './Button.module.css'

const Button = ({
  title='버튼', 
  variant='purple', 
  size='small',
  ...props
}) => {
  return (
    <button 
      type='button'
      // className= '' or {} {``빽틱쓰면 변수와문자열사용}
      className={
        `${styles.button} ${styles[variant]} ${styles[size]}`
      }
      {...props}
    >{title}</button>
  )
}

export default Button

// data = {
//  name : 'kim',
//  age : 20
// }
//
// const key = 'age'; -> data.key; (data.age)
// data[key]; -> data['age']


//data.name;  //kim
//data[name]; //kim