import Counter from "./components/Counter";
import MiFormulario from "./components/Formulario";
import UseStateInfo from "./components/UseStateInfo";
import WhyComponent from "./components/WhyComponent";
import UIChangesInfo from "./components/UIChangesInfo";
import MiBoton from "./components/MiBoton";
import TemporaryStateInfo from "./components/TemporaryStateInfo";
import Temporizador from "./components/Temporizador";
import CollectionsInfo from "./components/CollectionsInfo";
import ListaDeTareas from "./components/ListaDeTareas";
import UseStateSummary from "./components/UseStateSummary";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const myGithubRepo =
    "https://github.com/anayaricardo/Curso-React.js/tree/master"; // ¡CAMBIA ESTO POR TU REPOSITORIO REAL!
  const myLinkedinProfile = "https://www.linkedin.com/in/ricardoanaya"; // ¡CAMBIA ESTO POR TU PERFIL DE LINKEDIN REAL!
  return (
    <>
      <Header />
      <div className="main-content">
        <WhyComponent />
        <br />
        <Counter />
        <br />
        <hr />
        <br />
        <UseStateInfo />
        <br />
        <MiFormulario />
        <br />
        <hr />
        <br />
        <UIChangesInfo />
        <br />
        <MiBoton />
        <br />
        <br />
        <hr />
        <br />
        <TemporaryStateInfo />
        <br />
        <Temporizador />
        <br />
        <hr />
        <br />
        <CollectionsInfo />
        <br />
        <ListaDeTareas />
        <br />
        <hr />
        <br />
        <UseStateSummary />
      </div>
      <Footer
        githubRepoLink={myGithubRepo}
        linkedinProfileLink={myLinkedinProfile}
      />
    </>
  );
}

export default App;
