
import { Card, Typography, Space } from 'antd';
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
            <Space orientation="vertical" size="middle">
                <Text className="personal-etiqueta">
                    BIENVENIDO A MI PORTAFOLIO MI NOMBRE ES:
                </Text>

                <Title level={1} className="personal-titulo">
                    Constanza Becerra.
                </Title>

                <Paragraph className="personal-descripcion">
                    Soy estudiante de analista programador en su segundo año.
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
        </Card>
    );
}

export default PersonalCard;
