import { FormEvent, useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';
import {
  FormValues,
  HandleChangeType,
} from '@/components/sections/Contact/form.models';

export const useForm = () => {
  const initialValues: FormValues = {
    from_name: '',
    user_name: '',
    message: '',
  };
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setisSubmitting] = useState(false);
  const handleChange = ({ target }: HandleChangeType) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current || isSubmitting) return
    const checkEmptyFields = Object.values(values).filter(value => value === '');
    if (checkEmptyFields.length) {
      toast.error('Todos los campos son obligatorios! 😁');
      return;
    }
    try {
      setisSubmitting(true);
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        'LWeS1yamCtc9aY2WE'
      );
      toast.success('Mensaje Enviado! 😎');
      setValues(initialValues);
      setIsSubmitted(true);
      setisSubmitting(false);
    } catch (error) {
      console.log(error);
      toast.error('Error al enviar el mensaje 😞 Intente más tarde');
      setisSubmitting(false);
    }
  };
  return {
    handleChange,
    sendEmail,
    formRef,
    isSubmitted,
    setIsSubmitted,
    isSubmitting,
  };
};
