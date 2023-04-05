import { useState } from "react";
import { useForm } from "../hooks/useForm";

type User = {
  email: string;
  name: string;
  tel: string;
};

const ErrorMessage = ({ id, msg }: { id: string; msg: string }) => {
  return (
    <span id={id} className="block text-sm text-red">
      {msg}
    </span>
  );
};

const SectionForms = () => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { handleSubmit, handleOnBlur, handleChange, data, errors, valid } =
    useForm<User>({
      validations: {
        name: {
          pattern: {
            value: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
            message: "Nome invalido, apenas letras",
          },
        },
        email: {
          pattern: {
            value: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
            message: "Email invalido",
          },
        },
        tel: {
          pattern: {
            value: "^([1-9]{2}\\s?)?[9]?\\d{4}(-|\\s)?\\d{4}$",
            message: "Telefone invalido",
          },
        },
      },
      onSubmit: (data: User) => kkkkk(data),
    });

  const kkkkk = async (data: User) => {
    setIsSubmiting(true);
    console.log(data);

    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ tubias: 123 }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
    } catch (error) {
      console.log("error dus guri");
    } finally {
      setIsSubmiting(false);
    }
  };

  return (
    <section className="container flex flex-col p-8 mx-auto space-y-16">
      <h1 className="text-3xl text-center md:text-6xl font-nabla">
        Preencha esse forms vagabundo
      </h1>
      <form className="mx-auto w-full md:w-1/2" onSubmit={handleSubmit}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="email"
            id="email"
            className={`floating-input peer ${
              errors?.email ? "form-error" : ""
            }`}
            placeholder=" "
            value={data.email || ""}
            required
            onChange={handleChange("email")}
            onBlur={handleOnBlur("email")}
          />
          <label htmlFor="email" className="floating-label">
            Email
          </label>
          {errors?.email && <ErrorMessage id="name-error" msg={errors.email} />}
        </div>{" "}
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="name"
            id="name"
            className={`floating-input peer ${
              errors?.name ? "form-error" : ""
            }`}
            placeholder=" "
            value={data.name || ""}
            required
            onChange={handleChange("name")}
            onBlur={handleOnBlur("name")}
          />
          <label htmlFor="name" className="floating-label">
            Nome
          </label>
          {errors?.name && <ErrorMessage id="name-error" msg={errors.name} />}
        </div>{" "}
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="tel"
            name="tel"
            id="tel"
            className={`floating-input peer ${errors?.tel ? "form-error" : ""}`}
            placeholder=" "
            value={data.tel || ""}
            required
            onChange={handleChange("tel")}
            onBlur={handleOnBlur("tel")}
          />
          <label htmlFor="tel" className="floating-label">
            Celular
          </label>
          {errors?.tel && <ErrorMessage id="tel-error" msg={errors.tel} />}
        </div>{" "}
        <button
          type="submit"
          disabled={isSubmiting || !valid}
          className="py-2 w-full text-base font-bold rounded-full transition-all duration-500 ease-in-out hover:scale-105 bg-peach hover:bg-maroon disabled:bg-overlay2 disabled:hover:scale-100"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default SectionForms;
