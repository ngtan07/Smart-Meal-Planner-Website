import { Image, Typography, Flex, Tag } from 'antd'

const { Title } = Typography;

const RecipeDetailImage = ({ recipeDetail }) => {

    return (
        <>
            <Image
                src={recipeDetail.strMealThumb}
                alt={recipeDetail.strMeal}
                width="100%"
                height={400}

                style={{
                    objectFit: 'cover',
                    borderRadius: '16px',
                }}
            />

            <Flex
                justify="space-between"
                align="center"
                style={{ marginTop: '30px' }}
            >

                <Title level={2}>
                    {recipeDetail.strMeal}
                </Title>

                <Flex gap='18px' className='recipe-detail-tag'>
                    <Tag color='red' >{recipeDetail.strCategory}</Tag>
                    <Tag color='blue'>{recipeDetail.strArea}</Tag>
                </Flex>

            </Flex>

        </>
    )
}

export default RecipeDetailImage;