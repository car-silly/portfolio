import { Card, Typography, Space, Row, Col } from 'antd';
import AppButton from '../atoms/AppButton';

const { Title, Paragraph, Text } = Typography;

function PersonalCard() {
    const irAProyectos = () => {
        document.getElementById('proyectos')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const irAContacto = () => {
        document.getElementById('contacto')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <Card className="personal-card">
            <Row align="middle" gutter={[32, 24]}>
                <Col xs={24} md={15}>
                    <Space orientation="vertical" size="middle">
                        <Text className="personal-etiqueta">
                            BIENVENIDO A MI PORTAFOLIO, MI NOMBRE ES:
                        </Text>

                        <Title level={1} className="personal-titulo">
                            Constanza Becerra.
                        </Title>

                        <Paragraph className="personal-descripcion">
                            Soy estudiante de Analista Programador en mi segundo año.
                        </Paragraph>

                        <Space wrap size="middle">
                            <AppButton
                                texto="Ver proyectos"
                                onClick={irAProyectos}
                            />

                            <AppButton
                                texto="Contactarme"
                                onClick={irAContacto}
                            />
                        </Space>
                    </Space>
                </Col>

                <Col xs={24} md={9} className="personal-imagen-col">
                    <img
                        src="/images/perfil.jpg"
                        alt="Fotografía de Constanza Becerra"
                        className="personal-imagen"
                    />
                </Col>
            </Row>
        </Card>
    );
}

export default PersonalCard;