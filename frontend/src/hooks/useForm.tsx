import React, { useState } from 'react';

export const useForm = (initialValue: any) => {
  const [values, setValues] = useState(initialValue)

  return{
    values,
    handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    }
  }
}