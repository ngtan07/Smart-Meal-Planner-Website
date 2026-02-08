import { Row, Col, Empty } from 'antd'
import RecipeCard from "./RecipeCard";


const RecipeList = ({ recipes }) => {

    if (!recipes.length)
        return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

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