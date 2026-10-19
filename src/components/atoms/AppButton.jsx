
import { Button } from 'antd';

function AppButton({
  texto,
  tipo = 'primary',
  htmlType = 'button',
  onClick,
}) {
  return (
    <Button
      type={tipo}
      htmlType={htmlType}
      onClick={onClick}
    >
      {texto}
    </Button>
  );
}

export default AppButton;
