
import { useState } from 'react';
import {
  Card,
  Form,
  Input,
  Button,
  Typography,
  Space,
  message,
} from 'antd';
import AppButton from '../atoms/AppButton';

const { TextArea } = Input;
const { Paragraph } = Typography;

function ContactCard() {
  const [form] = Form.useForm();
  const [enviado, setEnviado] = useState(false);

  const onFinish = (valores) => {
    console.log('Datos del formulario:', valores);

    setEnviado(true);
    message.success('Formulario validado correctamente.');
    form.resetFields();
  };

  const onValuesChange = () => {
    if (enviado) {
      setEnviado(false);
    }
  };

  return (
    <Card>
      <Paragraph>
        Contáctame. Puedes encontrarme en mis redes
        sociales o dejarme un mensaje mediante el formulario.
      </Paragraph>

      <Space wrap size="middle" style={{ marginBottom: 24 }}>
        <Button
          href="https://github.com/car-silly"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Button>

        <Button
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </Button>
      </Space>

      {enviado && (
        <Paragraph type="success">
          ¡Formulario validado correctamente!
        </Paragraph>
      )}

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onValuesChange={onValuesChange}
        onFinishFailed={() => {
          message.error('Revisa los campos del formulario.');
        }}
      >
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[
            { required: true, message: 'Ingresa tu nombre.' },
            {
              whitespace: true,
              message: 'El nombre no puede estar vacío.',
            },
          ]}
        >
          <Input placeholder="Tu nombre" maxLength={80} />
        </Form.Item>

        <Form.Item
          label="Correo electrónico"
          name="correo"
          rules={[
            {
              required: true,
              message: 'Ingresa tu correo electrónico.',
            },
            {
              type: 'email',
              message: 'Ingresa un correo válido.',
            },
          ]}
        >
          <Input
            placeholder="correo@ejemplo.com"
            maxLength={254}
          />
        </Form.Item>

        <Form.Item
          label="Mensaje"
          name="mensaje"
          rules={[
            { required: true, message: 'Escribe tu mensaje.' },
            {
              whitespace: true,
              message: 'El mensaje no puede estar vacío.',
            },
            {
              min: 10,
              message: 'El mensaje debe tener al menos 10 caracteres.',
            },
          ]}
        >
          <TextArea
            rows={4}
            maxLength={1000}
            showCount
            placeholder="Escribe tu mensaje..."
          />
        </Form.Item>

        <Form.Item>
          <AppButton
            texto="Enviar mensaje"
            htmlType="submit"
          />
        </Form.Item>
      </Form>
    </Card>
  );
}

export default ContactCard;
