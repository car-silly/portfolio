import { Space } from 'antd';
import AppTitle from '../atoms/AppTitle';
import ContactCard from '../molecules/ContactCard';

function ContactSection() {
  return (
    <Space orientation="vertical" size="large" style={{ width: '100%' }}>
      <AppTitle texto="Contacto" />
      <ContactCard />
    </Space>
  );
}

export default ContactSection;