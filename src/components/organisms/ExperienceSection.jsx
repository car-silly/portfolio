
import { Space } from 'antd';
import AppTitle from '../atoms/AppTitle';
import ExperienceCard from '../molecules/ExperienceCard';

function ExperienceSection() {
  return (
    <Space orientation="vertical" size="large" style={{ width: '100%' }}>
      <AppTitle texto="Experiencia laboral" />

      <ExperienceCard
        cargo="Barista polifuncional"
        empresa="Cafetería Taste"
        fecha="Enero 2024 - Diciembre 2024"
        responsabilidades="Preparación de cafés fríos, calientes y filtrados; atención al cliente en caja; limpieza del área de trabajo; control de inventario y planificación de pedidos de insumos; cierre y cuadre de caja."
        habilidades={[
          'Atención al cliente',
          'Preparación de café',
          'Control de inventario',
          'Gestión de pedidos',
          'Manejo de caja',
        ]}
      />
    </Space>
  );
}

export default ExperienceSection;
