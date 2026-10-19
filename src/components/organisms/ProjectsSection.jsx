
import { Row, Col, Space, Empty } from 'antd';
import AppTitle from '../atoms/AppTitle';
import ProjectCard from '../molecules/ProjectCard';

const proyectos = [
  {
    id: 1,
    titulo: 'OptiBeans',
    imagen: '/images/optibeans.png',
    repositorio:
      'https://github.com/dumbcat-cane/optibean_nunez_zepeda_becerra_011D',
    descripcion: 'Sistema de gestión para una óptica.',
  },
  {
    id: 2,
    titulo: 'Gourmet Hub',
    imagen: '/images/gourmet-hub.png',
    repositorio:
      'https://github.com/dumbcat-cane/EvaluacionFullStack',
    descripcion:
      'Aplicación web de gastronomía con catálogo de productos y talleres.',
  },
];

function ProjectsSection() {
  return (
    <Space
      orientation="vertical"
      size="large"
      style={{ width: '100%' }}
    >
      <AppTitle texto="Proyectos destacados" />

      {proyectos.length > 0 ? (
        <Row gutter={[24, 24]} style={{ width: '100%' }}>
          {proyectos.map((proyecto) => (
            <Col xs={24} md={12} key={proyecto.id}>
              <ProjectCard
                titulo={proyecto.titulo}
                imagen={proyecto.imagen}
                repositorio={proyecto.repositorio}
                descripcion={proyecto.descripcion}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Empty description="No hay proyectos disponibles." />
      )}
    </Space>
  );
}

export default ProjectsSection;
