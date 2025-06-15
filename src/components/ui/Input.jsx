import React from 'react'
import cn from '../../utils/cn'

const Input = ({className, type, ...props}, ref) => {
  return <input className={cn("", className)} type={type} {...props} ref={ref}/>
}

export default Input