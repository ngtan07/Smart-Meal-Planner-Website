import { Card, Flex, Tag, Typography } from "antd"
import { Link } from "react-router-dom"

const { Title } = Typography;
const RecipeCard = ({ recipe }) => {
    return (
        <Link to={`/recipeDetail/${recipe.idMeal}`}>
            <Card className="card-shadow recipe-card"
                cover={
                    <img
                        src={recipe.strMealThumb}
                        alt={recipe.strMeal}
                        style={{
                            height: 220,
                            objectFit: 'cover',
                            width: '100%'
                        }} />
                }
            >
                <Flex justify="space-between" align="center"
                    style={{ margin: '20px 15px ' }}>
                    <Title level={4}>{recipe.strMeal}</Title>
                    <Flex gap={20} className="recipe-card-tag" >
                        <Tag color='red'>
                            {recipe.strCategory}
                        </Tag>
                        <Tag color='orange'>
                            {recipe.strArea}
                        </Tag>
                    </Flex>
                </Flex>


            </Card>
        </Link>
    )
}

export default RecipeCard