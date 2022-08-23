import styled from "styled-components";
import { getAllItems, getCategory } from "../api";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import BottomMenu from "../components/global/BottomMenu";
import CatHeader from "../components/CategoryPage/CatHeader";
import LineChart from "../components/CategoryPage/LineChart";
import Articles from "../components/mainPage/Articles";
import OtherProdunts from "../components/CategoryPage/OtherProducts";
import ModalButton from "../components/CategoryPage/Modal";

const Wrapper = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Board = styled.div`
  padding-top: 90px;
  padding-bottom: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToNewsBtn = styled.div`
  height: 48px;
  width: calc(100vw - 32px);
  margin: 16px;
  background-color: #f4f4f4;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CategoryPage() {
  const { categoryId } = useParams();
  const { isLoading: allCatLoading, data: allCatData } = useQuery(
    ["allCategories"],
    getAllItems
  );
  const { isLoading: categoryLoading, data: categoryData } = useQuery(
    [`Category${categoryId}`, categoryId],
    () => getCategory(categoryId)
  );
  //console.log(categoryLoading, categoryData);
  //console.log(allCatLoading, allCatData);
  const categories = [];
  if (allCatData) {
    for (let i = 0; i < allCatData.length; i++) {
      const titleStrs = allCatData[i].title.split(" ");
      const title = titleStrs[titleStrs.length - 1];
      const categoryId = allCatData[i].issueCategoryId;
      const category = { title, categoryId };
      categories.push(category);
    }
  } else {
    categories.push(
      { title: "no", categoryId: 1 },
      { title: "data", categoryId: 2 }
    );
  }

  return (
    <Wrapper>
      {allCatLoading ? null : <CatHeader categories={categories} />}
      <Board>
        <ModalButton />
        {categoryLoading ? null : (
          <>
            <LineChart priceData={categoryData.priceStatisticsRes} />
            <Articles articles={categoryData.news.slice(0, 3)} />
          </>
        )}
        <Link to={"/news"}>
          <ToNewsBtn>컬리버드 소식 전체보기</ToNewsBtn>
        </Link>
        {categoryLoading ? null : (
          <OtherProdunts products={categoryData.products} />
        )}
      </Board>

      <BottomMenu />
    </Wrapper>
  );
}

export default CategoryPage;
