import {
  FormValues,
  HandleChangeType,
} from '@/components/sections/Contact/form.models';
import {
  ToastErrorEN,
  ToastErrorES,
  toastErrorServerEN,
  toastErrorServerES,
  ToastSuccessEN,
  ToastSuccessES,
} from '@/constants/lang';
import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';
import { toast } from 'react-toastify';

// Todo refactor ToastMessages conditionals

export const useForm = () => {
  const initialValues: FormValues = {
    from_name: '',
    user_name: '',
    message: '',
  };
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lang = localStorage.getItem('lang') || 'ES';
  console.log(lang);

  const handleChange = ({ target }: HandleChangeType) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const sendEmail = async (e: FormEvent) => {
    debugger;
    e.preventDefault();
    if (!formRef.current || isSubmitting) return;
    const checkEmptyFields = Object.values(values).filter(
      value => value.trim() === ''
    );

    if (checkEmptyFields.length)
      return toast.error(lang === 'ES' ? ToastErrorES : ToastErrorEN);

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        'LWeS1yamCtc9aY2WE'
      );
      toast.success(lang === 'ES' ? ToastSuccessES : ToastSuccessEN);
      setValues(initialValues);
      setIsSubmitted(true);
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      toast.error(lang === 'ES' ? toastErrorServerES : toastErrorServerEN);
      setIsSubmitting(false);
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
