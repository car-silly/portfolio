import { Layout, Menu } from 'antd';

const { Header } = Layout;

const items = [
  { key: 'inicio', label: 'Inicio' },
  { key: 'experiencia', label: 'Experiencia' },
  { key: 'educacion', label: 'Estudios' },
  { key: 'proyectos', label: 'Proyectos' },
  { key: 'contacto', label: 'Contacto' },
];

function Navbar() {
  const navegarASeccion = ({ key }) => {
    document.getElementById(key)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          color: '#ffffff',
          fontWeight: 'bold',
          marginRight: 24,
        }}
      >
        MiPortafolio.
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['inicio']}
        items={items}
        onClick={navegarASeccion}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
}

export default Navbar;