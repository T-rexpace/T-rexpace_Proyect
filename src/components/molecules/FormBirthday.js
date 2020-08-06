import React from 'react'
import '../../scss/molecules/FormBirthday.scss'

import Input from '../../components/atoms/Input'
import Button from '../atoms/Button'

const FormBirthday = () => {
  return (
    <div className="formBirday">
      <Input 
        label="Fecha"
        placeholder="07/05/1946"
      />
      <Button type="normal" title="Consultar" />
    </div>
  )
}

export default FormBirthday