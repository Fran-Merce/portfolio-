import { FormEvent, useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';
import {
  FormValues,
  HandleChangeType,
} from '@/components/sections/Contact/form.models';

export const useForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [values, setValues] = useState<FormValues>({
    from_name: '',
    user_name: '',
    message: '',
  });

  const handleChange = ({ target }: HandleChangeType) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    const checkEmptyFields = Object.values(values).filter(value => value === '');
    if (checkEmptyFields.length) {
      toast.error('Todos los campos son obligatorios! 😁');
      return;
    }
    if (!formRef.current) return;
    try {
      await emailjs.sendForm(
        process.env.EMAILJS_SERVICE_ID as string,
        process.env.EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.EMAILJS_USER_ID
      );
      console.log(formRef.current);
      toast.success('Mensaje Enviado! 😎');
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
      toast.error('Error al enviar el mensaje 😞 Intente más tarde');
    }
  };
  return { handleChange, sendEmail, formRef, isSubmitted, setIsSubmitted };
};
