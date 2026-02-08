import { ChefHat } from "lucide-react";
import { Row, Col, Card, Button, Typography, Tag, Flex } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import useRecipes from "../../hooks/useRecipes";

const { Title } = Typography;

const ListSuggest = () => {
    const navigate = useNavigate();
    const { recipes } = useRecipes()

    // btn view all recipe
    const handleViewAllRecipe = () => {
        navigate('/recipe')
    }

    // get 5 recipe of all
    const listSuggest = recipes ? recipes.slice(0, 5) : [];
    return (
        <>
            <Flex align="center" gap={10}>
                <ChefHat size={35} color="rgba(255, 177, 68, 1)" />
                <Title level={4}>
                    Today's Suggestions
                </Title>
            </Flex>

            <Row gutter={[20, 20]} style={{ margin: '20px 0' }}>
                {listSuggest.map((recipe) => (
                    <Col span={24}
                        key={recipe.idMeal}
                        style={{ padding: 0 }}>
                        <Link to={`/recipeDetail/${recipe.idMeal}`}>
                            <Card className="card-shadow card-recipe"
                                style={{ padding: 0 }}>
                                <Row gutter={[20, 20]} wrap={false}>
                                    <Col className="card-recipe-image">
                                        <img
                                            alt={recipe.strMeal}
                                            src={recipe.strMealThumb}
                                        />
                                    </Col>
                                    <Col flex='auto' className="card-recipe-text">
                                        <Title level={5} style={{ marginBottom: '15px' }}>
                                            {recipe.strMeal}
                                        </Title>
                                        <Flex gap="15px" >
                                            <Tag color="red">{recipe.strCategory}</Tag>
                                            <Tag color="orange">{recipe.strArea}</Tag>
                                        </Flex>
                                    </Col>
                                </Row>
                            </Card>
                        </Link>
                    </Col>
                ))}

            </Row>

            <Button block className="btn-w100"
                onClick={() => handleViewAllRecipe()}>
                View all recipe
            </Button>
        </>
    )
}

export default ListSuggest