import styled from "styled-components";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDetail, getCategory } from "../api";
import DetailHeader from "../components/DetailPage/DetailHeader";
import ProductInfo from "../components/DetailPage/ProductInfo";
import DetailPageLineChart from "../components/DetailPage/LineChart";
import { useEffect, useState } from "react";
import DetailPageOtherProdunts from "../components/DetailPage/OtherProducts";
import DeliveryInfo from "../components/DetailPage/DeliveryInfo";
import PurchaseBtn from "../components/DetailPage/PurchaseBtn";

const Wrapper = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Board = styled.div`
  padding-top: 90px;
  padding-bottom: 68px;
`;

function DetailPage() {
  const { productId } = useParams();
  const { isLoading, data } = useQuery([`product${productId}`, productId], () =>
    getDetail(productId)
  );
  const [categoryData, setCategoryData] = useState(null);
  const [isCategoryDataLoading, setIsCategoryDataLoading] = useState(true);
  useEffect(() => {
    (async () => {
      if (!isLoading && data) {
        const categoryId = data.issueCategoryId;
        const res = await getCategory(categoryId);
        setCategoryData(res);
        setIsCategoryDataLoading(false);
      }
    })();
  }, [isLoading, data]);

  //console.log(isCategoryDataLoading, categoryData);
  //console.log(isLoading, data);
  return (
    <Wrapper>
      {isLoading ? null : (
        <>
          <DetailHeader productName={data.name} />
          <Board>
            <ProductInfo product={data} />
            {isCategoryDataLoading ? null : (
              <>
                <DetailPageLineChart
                  priceData={categoryData.priceStatisticsRes}
                />
                <DeliveryInfo />
                <DetailPageOtherProdunts products={categoryData.products} />
              </>
            )}
          </Board>
        </>
      )}
      <PurchaseBtn />
    </Wrapper>
  );
}

export default DetailPage;
