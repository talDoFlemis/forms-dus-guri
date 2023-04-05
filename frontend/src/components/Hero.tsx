const Hero = () => {
  return (
    <section className="flex flex-col gap-8 justify-center items-center p-8 h-screen text-center">
      <h1 className="text-5xl md:text-7xl font-nabla">
        Challenge DUS GURI 001
      </h1>
      <p className="text-4xl md:text-6xl font-caveat text-mauve">
        React + Express + PostgreSQL + Hate
      </p>
      <img
        src="https://media.tenor.com/c7LVjFZrBmIAAAAj/pepe-the-frog-pepe.gif"
        height={300}
        width={300}
        alt="pepe"
      />
    </section>
  );
};

export default Hero;
