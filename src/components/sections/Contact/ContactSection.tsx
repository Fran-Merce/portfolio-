import { useForm } from "@/hooks/useForm";
import { Form } from "./Form";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "@/components/UI/Loader";
import { Icon } from "@/components/UI/Icon";
import { useLangContext } from "@/context/lang.context";

export const ContactSection = () => {
  const {
    handleChange,
    sendEmail,
    formRef,
    isSubmitted,
    setIsSubmitted,
    isSubmitting,
  } = useForm();
  const {
    langContextData: { contact },
  } = useLangContext();

  if (isSubmitting) {
    return (
      <section className="min-h-screen mt-14 grid place-content-center w-full font-firaCode">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <Loader />
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[80vh] mt-14 grid place-content-center w-full font-firaCode">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        {!isSubmitted ? (
          <div>
            <h3 className="mb-4 text-4xl text-purple-500  text-center font-firaCode">
              {contact.title}
            </h3>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl"></p>
            <Form
              handleChange={handleChange}
              sendEmail={sendEmail}
              formRef={formRef}
              textData={contact.form}
            />
          </div>
        ) : (
          <div className="text-center flex flex-col items-center justify-center gap-5">
            <h3 className=" text-2xl font-normal text-center  tracking-tight  text-primary-600 font-firaCode text-purple-500 mb-10 ">
              {contact.success.title}
              <Icon src="/galaxy.png" size="la" />
              <Icon src="/astronaut-img.png" size="la" />
            </h3>
            <img
              src="https://i.giphy.com/media/tXLpxypfSXvUc/giphy.webp"
              alt="animated image"
            />
            <p
              onClick={() => setIsSubmitted(false)}
              className=" text-white hover:text-stone-300 cursor-pointer"
            >
              {contact.success.sendOther}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
