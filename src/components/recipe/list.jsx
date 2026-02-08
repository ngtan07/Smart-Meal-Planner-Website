import { useEffect, useState } from "react";
import { Card, Flex, Typography, Row, Col, Tag } from 'antd'
import { getAllRecipe } from "../../services/recipe.service";

const { Title } = Typography;

const ListRecipe = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        RecipeList()
    }, [])

    // get recipe list
    const RecipeList = async () => {
        const res = await getAllRecipe();

        if (res?.data?.meals) {
            setRecipes(res.data.meals)
        }
    }


    return (


        <>
            <Row gutter={[20, 20]}>
                {recipes.map((recipe) => (

                    <Col span={12} key={recipe.idMeal} >
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
                    </Col>
                ))}

            </Row>
        </>

    )
}

export default ListRecipe