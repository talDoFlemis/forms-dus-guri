import { useState } from "react";

const SectionForms = () => {
  const [valid, setValid] = useState(true);

  return (
    <section className="container flex flex-col p-8 mx-auto space-y-16">
      <h1 className="text-3xl text-center md:text-6xl font-nabla">
        Preencha esse forms vagabundo
      </h1>
      <form className="mx-auto w-full md:w-1/2">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="email"
            id="email"
            className="floating-input peer"
            placeholder=" "
            required
          />
          <label htmlFor="email" className="floating-label">
            Email
          </label>
        </div>{" "}
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="name"
            id="name"
            className="floating-input peer"
            placeholder=" "
            required
          />
          <label htmlFor="name" className="floating-label">
            Nome
          </label>
        </div>{" "}
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="tel"
            name="tel"
            id="tel"
            className="floating-input peer"
            placeholder=" "
            required
          />
          <label htmlFor="tel" className="floating-label">
            Celular
          </label>
        </div>{" "}
        <button
          type="submit"
          disabled={!valid}
          className={`py-2 w-full text-base font-bold rounded-full transition-all duration-500 ease-in-out ${
            valid ? "hover:scale-105 bg-peach hover:bg-maroon" : ""
          }`}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default SectionForms;
