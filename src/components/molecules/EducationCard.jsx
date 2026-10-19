import { Card, Typography, Tag, Space } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

function EducationCard({
  institucion,
  titulo,
  año,
  estado,
}) {
  return (
    <Card className="education-card">
      <Space align="center" size="middle">
        <BookOutlined className="education-icono" />

        <Title level={4} style={{ margin: 0 }}>
          {titulo}
        </Title>
      </Space>

      <Text strong className="education-institucion">
        {institucion}
      </Text>

      <Paragraph type="secondary">
        {año}
      </Paragraph>

      <div className="education-estado">
        <Tag color="blue">{estado}</Tag>
      </div>
    </Card>
  );
}

export default EducationCard;