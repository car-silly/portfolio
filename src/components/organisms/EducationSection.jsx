
import { Space } from 'antd';
import AppTitle from '../atoms/AppTitle';
import EducationCard from '../molecules/EducationCard';

function EducationSection() {
  return (
    <Space
      orientation="vertical"
      size="large"
      style={{ width: '100%' }}
    >
      <AppTitle texto="Estudios" />

      <EducationCard
        institucion="Duoc Uc"
        titulo="Analista Programador"
        año="2025 - Actualidad"
        estado="En curso"
      />
    </Space>
  );
}

export default EducationSection;
