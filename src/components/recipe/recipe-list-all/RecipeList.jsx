import { Row, Col, Empty, Spin } from 'antd'
import RecipeCard from "./RecipeCard";


const RecipeList = ({ recipes, loading }) => {

    if (loading) {
        return (
            <div style={{ textAlign: 'center' }}>
                <Spin size="large" />
            </div>
        )
    }

    if (!recipes.length)
        return <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description='No recipes found' />;

    return (
        <>
            <Row gutter={[20, 20]}>
                {recipes.map((recipe) => (

                    <Col span={12} key={recipe.idMeal} >
                        <RecipeCard recipe={recipe} />
                    </Col>
                ))}

            </Row>
        </>

    )
}

export default RecipeList