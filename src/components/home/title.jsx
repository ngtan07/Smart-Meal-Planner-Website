
import { BookOpen, Calendar, Package, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Typography } from 'antd';

const { Title, Text } = Typography;

const TitleContent = () => {

    return (
        <>
            <Title level={4}>
                Welcome back, Ng T An !
            </Title>
            <Text style={{ fontStyle: 'italic', color: '#e59e22' }} >
                What would you like to cook today ?
            </Text>
        </>
    )
}

export default TitleContent;
