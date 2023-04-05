import { useEffect, useState } from "react";
import { User } from "./SectionForms";

interface UserFromDB extends User {
  id: number;
  image: string;
}

const RowVagabunda = ({
  nome,
  idade,
  profissao,
  mensagem,
  image,
}: UserFromDB) => {
  return (
    <li className="grid overflow-hidden place-items-center rounded-lg md:grid-cols-2 bg-surface2">
      <img src={image} alt="pepe" />
      <div className="flex flex-col gap-8">
        <h3 className="text-5xl font-caveat text-peach">{nome}</h3>
        <span className="text-4xl font-bold text-mauve">{idade}</span>
        <p className="text-3xl text-sapphire">{profissao}</p>
        <p className="text-2xl text-white">{mensagem}</p>
      </div>
    </li>
  );
};

const SectionSoul = () => {
  const [mtfks, setMtfks] = useState<UserFromDB[]>([]);

  const fetchMtfks = async () => {
    try {
      const resp = await fetch(`http://localhost:4000/tubias`);
      const data = await resp.json();
      setMtfks(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMtfks();
  }, []);

  return (
    <section className="container flex flex-col items-center p-8 mx-auto space-y-16 text-center">
      <h1 className="text-3xl md:text-6xl font-nabla">
        People that sold their souls to the devil
      </h1>
      <img
        alt="pepe usguri"
        src="https://media.tenor.com/mgj4kpI-UhkAAAAj/pepe.gif"
        width={200}
        height={200}
      />
      {mtfks.length !== 0 ? (
        <ul className="flex flex-col gap-8">
          {mtfks.map((mtfk: UserFromDB) => (
            <RowVagabunda
              key={mtfk.id}
              id={mtfk.id}
              nome={mtfk.nome}
              idade={mtfk.idade}
              profissao={mtfk.profissao}
              mensagem={mtfk.mensagem}
              image={mtfk.image}
            />
          ))}
        </ul>
      ) : (
        <div className="text-white bg-surface2">Nenhum vagabundo</div>
      )}
    </section>
  );
};

export default SectionSoul;
