import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Projects from './components/project/Projects';
import Contacts from './components/contact/Contacts';

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="services"><Services /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contacts /></section>
      </main>
    </>
  );
};

export default App;
