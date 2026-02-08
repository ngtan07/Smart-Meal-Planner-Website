import { Typography, Flex, Badge } from 'antd'
import getIngredients from '../../../utils/getIngredients'

const { Title, Text } = Typography;

const RecipeDetailIngredient = ({ recipeDetail }) => {

    const ingredients = getIngredients(recipeDetail);
    return (
        <>
            <Title level={4}
                style={{ color: '#e59e22', margin: '40px 0 20px 0' }}>
                Ingredients
            </Title>

            <div className='card-transparent'>

                <Flex vertical gap='15px'>
                    {ingredients.map((ingredient) => (
                        <Flex gap='20px' key={ingredient.id} align="center">
                            <Badge color='linear-gradient(135deg, #651609 0%, #862411 50%, #a83219 100%)' />

                            <Text style={{ fontSize: '16px' }}>
                                <Text strong>{ingredient.name}: </Text>
                                {ingredient.amount}
                            </Text>
                        </Flex>
                    ))}

                </Flex>

            </div>
        </>
    )
}

export default RecipeDetailIngredient