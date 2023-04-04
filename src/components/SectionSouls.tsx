interface RowVagabundaProps {
  email: string;
  name: string;
  tel: string;
}

const RowVagabunda = ({ email, name, tel }: RowVagabundaProps) => {
  return (
    <tr className="text-white bg-surface2">
      <td>{email}</td>
      <td>{name}</td>
      <td>{tel}</td>
    </tr>
  );
};

const SectionSoul = () => {
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
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-rosewater">
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6">Nome</th>
            <th className="py-3 px-6">Celular</th>
          </tr>
        </thead>
        <tbody>
          {/* {mtfks.map((mtfk: any) => ( */}
          {/*   <RowVagabunda */}
          {/*     key={mtfk.id} */}
          {/*     email={mtfk.email} */}
          {/*     name={mtfk.name} */}
          {/*     tel={mtfk.phone} */}
          {/*   /> */}
          {/* ))} */}
        </tbody>
      </table>
    </section>
  );
};

export default SectionSoul;
