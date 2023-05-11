import Button from "./Button";
import {useState} from "react";
import Label from './Label/Label';
import Input from './Input/Input';
import {handleFormUpdate} from '@/lib/form';
import InputWrapper from "./InputWrapper/InputWrapper";

// formFields should have the keys: key, type, label, required

const FormTemplate = ({formFields, handleSubmit = f => f, submitButton='Submit', style={}, ...props}) => {
  const [formState, setFormState] = useState(() => {
    let emptyFormState = {}
    formFields.map(field => emptyFormState = {...emptyFormState, [field.key]: ''})
    return emptyFormState
  })

  return (
    <form className='flex flex-col max-w-full' onSubmit={e => handleSubmit(e, formState)} style={{...style}} {...props}>
      { formFields.map((field) =>
        <InputWrapper key={field.key}>
          <Label>{field.label}</Label>
          { field.type === 'textarea' ?
            <textarea
              name={field.key}
              value={formState[field.key] || ''}
              onChange={e => handleFormUpdate(e, formState, setFormState)}
              required={field.required}
              className='max-w-full w-[200px] bg-transparent border border-black rounded-md shadow-custom'/>
            :
            <Input
              name={field.key}
              type={field.type}
              value={formState[field.key] || ''}
              onChange={e => handleFormUpdate(e, formState, setFormState)}
              required={field.required}
            />
          }
        </InputWrapper>
      )
      }
      <div className='flex justify-center'>
        <Button type='submit'>{submitButton}</Button>
      </div>
    </form>
  )
}

export {FormTemplate as default, handleFormUpdate}