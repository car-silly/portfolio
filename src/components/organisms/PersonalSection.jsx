
import { Space } from 'antd';
import AppTitle from '../atoms/AppTitle';
import PersonalCard from '../molecules/PersonalCard';

function PersonalSection() {
  return (
    <Space
      orientation="vertical"
      size="large"
      style={{ width: '100%' }}
    >
      <AppTitle texto="Sobre Mi" />
      <PersonalCard />
    </Space>
  );
}

export default PersonalSection;
