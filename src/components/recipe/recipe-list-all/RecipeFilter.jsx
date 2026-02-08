import { Filter } from "lucide-react"
import { Select, Flex, Typography } from 'antd'
import useCategories from "../../../hooks/useCategories";
import useAreas from "../../../hooks/useAreas";

const { Text } = Typography;

const RecipeFilter = ({ filter, handleArea, handleCategory }) => {

    const { categories } = useCategories()
    const { areas } = useAreas()


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
                        value={filter.category}
                        onChange={handleCategory}
                        popupMatchSelectWidth={false}
                        options={categories?.map(category => ({ value: category, label: category }))}
                    />
                </Flex>

                <Flex gap={10} align="center" >
                    <Text>
                        Area:
                    </Text>
                    <Select
                        className="filter-item-select"
                        value={filter.area}
                        onChange={handleArea}
                        popupMatchSelectWidth={false}
                        options={areas?.map(area => ({ value: area, label: area }))}
                    />
                </Flex>

            </Flex>
        </>

    )
}

export default RecipeFilter