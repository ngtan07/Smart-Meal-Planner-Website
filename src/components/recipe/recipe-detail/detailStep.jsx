import ListAllRecipe from '../../../mock/recipeList.json'
import { Typography, Flex, Steps, Button } from 'antd'
import { Calendar, ShoppingCart } from 'lucide-react';
import getSteps from '../../../utils/getSteps';

const { Title, Text } = Typography;

const RecipeDetailStep = ({ recipeDetail }) => {

    console.log(recipeDetail)


    const recipe = ListAllRecipe.find((recipe) => recipe.id === '1')
    const stepsRaw = getSteps(recipeDetail)
    const steps = stepsRaw.map(step => ({
        title: step,
    }))
    return (
        <>
            <Title level={4}
                style={{ color: '#e59e22', margin: '40px 0 20px 0' }}>
                Steps
            </Title>

            <Steps
                orientation="vertical"
                current={-1}
                items={steps}
                style={{
                    color: 'linear-gradient(135deg, #651609 0%, #862411 50%, #a83219 100%)'
                }} />

            <Flex vertical className='btn-group-w100'>
                <Button block className='btn-w100-red'>
                    <Calendar />
                    Add to Calendar
                </Button>
                <Button block className='btn-w100-yellow'>
                    <ShoppingCart />
                    Add to Shopping List
                </Button>
            </Flex>

        </>
    )
}

export default RecipeDetailStep