'use client'

import InputWrapper from "@/components/InputWrapper/InputWrapper";
import Label from "@/components/Label/Label";
import {handleFormUpdate} from "@/lib/form";
import Input from "@/components/Input/Input";
import Button from "@/components/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";

interface ConformFormInputs {
  name: string
  email: string
  phone: string
  description: string
}

const ContactForm = () => {
  const [message, setMessage] = useState('')
  const { register, handleSubmit } = useForm<ConformFormInputs>()

  const emailForm: SubmitHandler<ConformFormInputs> = async data => {
    const endpoint =
      "https://x9ku3ihf2i.execute-api.us-east-1.amazonaws.com/default/martin-email";

    const body = JSON.stringify(data);
    const requestOptions = {
      method: "POST",
      body
    };

    fetch(endpoint, requestOptions)
      .then((response) => {
        console.log(response)
        if (response.ok) {
          setMessage("Your project requested has been successfully submitted.")
        }
        else {
          setMessage("Sorry, we ran into a problem processing your request. Please contact us with the email address above.")
        }
      })
  }

  if(message) {
    return <div>{message}</div>
  }

  return (
    <form className='w-full max-w-[500px] flex flex-col' onSubmit={handleSubmit(emailForm)}>
      <InputWrapper className='my-4'>
        <Label>Full Name</Label>
        <Input {...register('name', {required: true})}/>
      </InputWrapper>
      <InputWrapper>
        <Label>Email</Label>
        <Input {...register('email', {required: true})}/>
      </InputWrapper>
      <InputWrapper className='my-4'>
        <Label>Phone Number</Label>
        <Input {...register('phone', {required: true})}/>
      </InputWrapper>
      <InputWrapper className='my-4'>
        <Label>Project Description</Label>
        <textarea
          {...register('description', {required: true})}
          className='w-full flex-1 max-w-full basis-[220px] p-2 bg-transparent border border-black rounded-md shadow-custom'/>
      </InputWrapper>
      <div className='flex justify-center'>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  )
}

export default ContactForm