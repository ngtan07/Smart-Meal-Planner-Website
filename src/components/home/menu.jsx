
import { BookOpen, Calendar, Package, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, Avatar, Typography, Row, Col } from 'antd';

const { Text } = Typography;

const Menu = () => {

    const shortcuts = [
        { icon: BookOpen, label: 'Recipe', path: '/recipe', color: 'rgb(64, 129, 240)' },
        { icon: Package, label: 'Ingredient', path: '/ingredient', color: 'rgb(165, 93, 165)' },
        { icon: Calendar, label: 'Meal schedule', path: '/plan', color: 'rgb(105, 175, 105)' },
        { icon: ShoppingCart, label: 'Shopping', path: '/shopping', color: 'rgb(236, 115, 115)' },
    ];

    const gridSpan = { xs: 24, sm: 12, md: 12 };
    return (
        <Row gutter={[25, 25]} /*gap*/ style={{ margin: '50px -12px' }}>
            {shortcuts.map((shortcut) => (
                <Col {...gridSpan} key={shortcut.path}>
                    <Link to={shortcut.path}>
                        <Card className="card-shadow shortcut-item"
                            style={{ borderRadius: '14px' }}>
                            <Avatar
                                size={64}
                                icon={<shortcut.icon size={28} color='white' />}
                                style={{
                                    backgroundColor: shortcut.color,
                                }}
                            />

                            <Text>{shortcut.label}</Text>

                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>

    )
}

export default Menu;
