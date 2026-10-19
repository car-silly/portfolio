import { Card, Typography, Tag, Space } from 'antd';
import { CoffeeOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

function ExperienceCard({
  cargo,
  empresa,
  fecha,
  responsabilidades,
  habilidades = [],
}) {
  return (
    <Card className="experience-card">
      <Space align="center" size="middle">
        <CoffeeOutlined className="experience-icono" />
        <Title level={4} style={{ margin: 0 }}>
          {cargo}
        </Title>
      </Space>

      <Text strong className="experience-empresa">
        {empresa}
      </Text>

      <Paragraph type="secondary">
        {fecha}
      </Paragraph>

      <Paragraph className="experience-responsabilidades">
        {responsabilidades}
      </Paragraph>

      <div className="experience-habilidades">
        <Title level={5}>Habilidades</Title>

        <Space wrap size={[8, 8]}>
          {habilidades.map((habilidad) => (
            <Tag key={habilidad} color="blue">
              {habilidad}
            </Tag>
          ))}
        </Space>
      </div>
    </Card>
  );
}

export default ExperienceCard;