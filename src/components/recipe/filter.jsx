import { Filter } from "lucide-react"
import { Select, Flex, Typography } from 'antd'
import { useEffect, useState } from "react"
import { getAllCategory, getAllArea } from "../../services/recipe.service";

const { Text } = Typography;

const FilterRecipe = () => {

    const [categories, setCategories] = useState(['All']);
    const [areas, setAreas] = useState(['All']);
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeArea, setActiveArea] = useState("All");

    useEffect(() => {
        CategoryList();
        AreaList();
    }, [])

    // get all category
    const CategoryList = async () => {
        const res = await getAllCategory();
        const categoryList = res.data.meals;
        setCategories(['All', ...new Set(categoryList.map((category) => category.strCategory))])

    }

    // get all area
    const AreaList = async () => {
        const res = await getAllArea();
        const areaList = res.data.meals;
        setAreas(['All', ...new Set(areaList.map((area) => area.strArea))])

    }

    // set active category
    const handleClickCategory = (category) => {
        setActiveCategory(category);
    }

    // set active area
    const handleClickArea = (area) => {
        setActiveArea(area);
    }

    return (
        <>
            <Flex gap={30} style={{ margin: '30px 0' }} align="center">
                <Flex
                    gap={10}
                    style={{ color: '#e59e22' }}>
                    <Filter size={20} />
                    <p>Filter by:</p>
                </Flex>

                <Flex gap={10} align="center">
                    <Text>
                        Category:
                    </Text>
                    <Select
                        className="filter-item-select"
                        value={activeCategory}
                        onChange={handleClickCategory}
                        popupMatchSelectWidth={false}
                        options={categories.map(category => ({ value: category, label: category }))}
                    />
                </Flex>

                <Flex gap={10} align="center" >
                    <Text>
                        Area:
                    </Text>
                    <Select
                        className="filter-item-select"
                        value={activeArea}
                        onChange={handleClickArea}
                        popupMatchSelectWidth={false}
                        options={areas.map(area => ({ value: area, label: area }))}
                    />
                </Flex>

            </Flex>
        </>

    )
}

export default FilterRecipe