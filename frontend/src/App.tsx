import Hero from "./components/Hero";
import SectionForms from "./components/SectionForms";
import SectionSoul from "./components/SectionSouls";

function App() {
  return (
    <main className="min-h-screen scroll-smooth bg-base">
      <Hero />
      <SectionForms />
      <SectionSoul />
    </main>
  );
}

export default App;
