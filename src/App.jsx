import { useEffect } from 'react';
import { Layout } from 'antd';

import './App.css';
import Navbar from './components/organisms/Navbar';
import ExperienceSection from './components/organisms/ExperienceSection';
import EducationSection from './components/organisms/EducationSection';
import ProjectsSection from './components/organisms/ProjectsSection';
import ContactSection from './components/organisms/ContactSection';
import PersonalSection from './components/organisms/PersonalSection';

const { Content, Footer } = Layout;

const App = () => {
  useEffect(() => {
    document.title = 'Mi Portafolio';
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <Layout
      style={{
        minHeight: '100vh',
        background: '#10141D',
      }}
    >
      <Navbar />

      <Content
        style={{
          padding: '24px 48px',
          background: '#10141D',
        }}
      >
        <div id="inicio" className="pagina">
          <PersonalSection />
        </div>

        <div id="experiencia" className="pagina">
          <ExperienceSection />
        </div>

        <div id="educacion" className="pagina">
          <EducationSection />
        </div>

        <div id="proyectos" className="pagina">
          <ProjectsSection />
        </div>

        <div id="contacto" className="pagina">
          <ContactSection />
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        <div>
          MiPortafolio © {currentYear ?? ''}. Todos los derechos reservados.
        </div>

        <div>
          Contacto: <a href="#contacto">Contáctame</a>
        </div>
      </Footer>
    </Layout>
  );
};

export default App;
