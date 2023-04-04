import { useState } from "react";
import { useForm } from "../hooks/useForm";

type User = {
  email: string;
  name: string;
  tel: string;
};

const ErrorMessage = ({ id, msg }: { id: string; msg: string }) => {
  return (
    <span id={id} className="block text-sm text-red-500">
      {msg}
    </span>
  );
};

const SectionForms = () => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { handleSubmit, handleChange, data, errors } = useForm<User>({
    validations: {
      name: {
        pattern: {
          value: "^[A-Za-z]*$",
          message: "Nome invalido, apenas letras e sem espaços, por favor",
        },
      },
      email: {
        pattern: {
          value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/",
          message: "Email invalido",
        },
      },
      tel: {
        pattern: {
          value: ".*",
          message: "Telefone invalido",
        },
      },
    },
    onSubmit: (data: User) => {
      console.log("data", data);
    },
  });

  const kkkkk = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmiting(true);

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

  console.log(errors);

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
            className="floating-input peer"
            placeholder=" "
            value={data.email || ""}
            required
            onChange={handleChange("email")}
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
            className="floating-input peer"
            placeholder=" "
            value={data.name || ""}
            required
            onChange={handleChange("name")}
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
            className="floating-input peer"
            placeholder=" "
            value={data.tel || ""}
            required
            onChange={handleChange("tel")}
          />
          <label htmlFor="tel" className="floating-label">
            Celular
          </label>
          {errors?.tel && <ErrorMessage id="tel-error" msg={errors.tel} />}
        </div>{" "}
        <button
          type="submit"
          disabled={false}
          className={`py-2 w-full text-base font-bold rounded-full transition-all duration-500 ease-in-out ${
            !isSubmiting
              ? "hover:scale-105 bg-peach hover:bg-maroon"
              : "bg-overlay2"
          }`}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default SectionForms;
