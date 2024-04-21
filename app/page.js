import About from "./components/about";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Intro />

      <About />

      <Skills />

    </main>
  );
}
