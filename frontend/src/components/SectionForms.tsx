import { useState } from "react";
import { useForm } from "../hooks/useForm";

export type User = {
  nome: string;
  idade: number;
  profissao: string;
  mensagem: string;
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
        nome: {
          pattern: {
            value: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
            message: "Nome invalido, apenas letras",
          },
        },
        idade: {
          custom: {
            isValid: (value) => parseInt(value) > 0 && parseInt(value) < 100,
            message: "Idade invalida",
          },
        },
        profissao: {
          pattern: {
            value: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
            message: "Profissao invalida, apenas letras",
          },
        },
        mensagem: {
          custom: {
            isValid: (value) => value.length > 10,
            message: "O conteúdo da mensagem deve ser maior que 10 caracteres",
          },
        },
      },
      onSubmit: (data: User) => submitMeDaddy(data),
    });

  const submitMeDaddy = async (data: User) => {
    setIsSubmiting(true);

    try {
      await fetch(`${import.meta.env.VITE_BACKEND}/tubias`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
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
            name="nome"
            id="nome"
            className={`floating-input peer ${
              errors?.nome ? "form-error" : ""
            }`}
            placeholder=" "
            value={data.nome || ""}
            required
            onChange={handleChange("nome")}
            onBlur={handleOnBlur("nome")}
          />
          <label htmlFor="nome" className="floating-label">
            Nome
          </label>
          {errors?.nome && <ErrorMessage id="name-error" msg={errors.nome} />}
        </div>{" "}
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="idade"
            id="idade"
            className={`floating-input peer ${
              errors?.idade ? "form-error" : ""
            }`}
            placeholder=" "
            value={data.idade || ""}
            required
            onChange={handleChange("idade")}
            onBlur={handleOnBlur("idade")}
          />
          <label htmlFor="idade" className="floating-label">
            Idade
          </label>
          {errors?.idade && (
            <ErrorMessage id="mensagem-error" msg={errors.idade} />
          )}
        </div>{" "}
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="profissao"
            id="profissao"
            className={`floating-input peer ${
              errors?.profissao ? "form-error" : ""
            }`}
            placeholder=" "
            value={data.profissao || ""}
            required
            onChange={handleChange("profissao")}
            onBlur={handleOnBlur("profissao")}
          />
          <label htmlFor="profissao" className="floating-label">
            Profissao
          </label>
          {errors?.profissao && (
            <ErrorMessage id="profissao-error" msg={errors.profissao} />
          )}
        </div>{" "}
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="mensagem"
            id="mensagem"
            className={`floating-input peer ${
              errors?.mensagem ? "form-error" : ""
            }`}
            placeholder=" "
            value={data.mensagem || ""}
            required
            onChange={handleChange("mensagem")}
            onBlur={handleOnBlur("mensagem")}
          />
          <label htmlFor="mensagem" className="floating-label">
            Mensagem
          </label>
          {errors?.mensagem && (
            <ErrorMessage id="mensagem-error" msg={errors.mensagem} />
          )}
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
