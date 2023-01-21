import { HandleChangeType } from "./form.models";
import { IForm } from "@/context/types";
import { FormEvent } from "react";

interface FormProps {
  handleChange: (e: HandleChangeType) => void;
  sendEmail: (e: FormEvent) => Promise<void>;
  formRef: React.RefObject<HTMLFormElement>;
  textData: IForm;
}
export const Form = ({
  handleChange,
  sendEmail,
  formRef,
  textData,
}: FormProps) => {
  const { name, email, message, submit, placeholder } = textData;
  return (
    <form
      onSubmit={sendEmail}
      ref={formRef}
      id="contact-form"
      action="#"
      className="space-y-8 sm:w-[600px] w-[80vw]  "
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm htmlFor=''t-medium text-purple-600 font-firaCode"
        >
          {email}
        </label>
        <input
          type="email"
          id="from_name"
          name="from_name"
          onChange={handleChange}
          className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg htmlFor=''us:ring-primary-500 htmlFor=''us:border-primary-500 block w-full p-2.5  placeholder-stone-400 text-black focus:ring-primary-500 focus:border-primary-500 shadow-sm-light font-firaCode font-medium"
          placeholder="Franmerce11@gmail.com"
        />
      </div>
      <div>
        <label
          htmlFor="name"
          id="user_name"
          className="block mb-2 text-sm font-medium text-purple-600 font-firaCode"
        >
          {name}
        </label>
        <input
          onChange={handleChange}
          name="user_name"
          type="text"
          id="user_name"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 font-medium"
          placeholder="Francisco Merce"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium  text-purple-600"
        >
          {message}
        </label>
        <textarea
          onChange={handleChange}
          name="message"
          id="message"
          rows={6}
          className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 text-black font-medium"
          placeholder={placeholder}
        ></textarea>
      </div>
      <div className="text-center">
        <button className="custom-btn btn-primary" type="submit">
          <span className="text-white">{submit}</span>
        </button>
      </div>
    </form>
  );
};
