
import { Typography } from 'antd';

const { Title } = Typography;

function AppTitle({ texto }) {
  return <Title level={2}>{texto}</Title>;
}

export default AppTitle;
