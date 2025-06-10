import Counter from "./components/Counter";
import MiFormulario from "./components/Formulario";
import UseStateInfo from "./components/UseStateInfo";
import WhyComponent from "./components/WhyComponent";
import UIChangesInfo from "./components/UIChangesInfo";
// import MiBoton from "./components/MiBoton";
import TemporaryStateInfo from "./components/TemporaryStateInfo";
import Temporizador from "./components/Temporizador";
import CollectionsInfo from "./components/CollectionsInfo";
import ListaDeTareas from "./components/ListaDeTareas";
import UseStateSummary from "./components/UseStateSummary";
import Header from "./components/Header";
import ToggleButton from "./components/ToggleButton";
import Footer from "./components/Footer";
import BooleanosInfo from "./components/BooleanosInfo";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import "./index.css";

function Section({ children }) {
  return (
    <section style={{ margin: "2rem 0" }}>
      {children}
      <hr />
    </section>
  );
}

function App() {
  const myGithubRepo =
    "https://github.com/anayaricardo/Curso-React.js/tree/master";
  const myLinkedinProfile = "https://www.linkedin.com/in/ricardoanaya";

  return (
    <>
      <Header />
      <div className="main-content">
        <Section>
          <WhyComponent />
          <Counter />
        </Section>
        <Section>
          <UseStateInfo />
          <MiFormulario />
        </Section>
        <Section>
          <UIChangesInfo />
          {/* <MiBoton /> */}
          <ToggleButton />
          <BooleanosInfo />
          <RenderizadoCondicional />
        </Section>
        <Section>
          <TemporaryStateInfo />
          <Temporizador />
        </Section>
        <Section>
          <CollectionsInfo />
          <ListaDeTareas />
        </Section>
        <Section>
          <UseStateSummary />
        </Section>
      </div>
      <Footer
        githubRepoLink={myGithubRepo}
        linkedinProfileLink={myLinkedinProfile}
      />
    </>
  );
}

export default App;
