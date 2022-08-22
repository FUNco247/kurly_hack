import styled from "styled-components";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDetail } from "../api";
import DetailHeader from "../components/DetailPage/DetailHeader";

const Wrapper = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Board = styled.div`
  padding-top: 88px;
  padding-bottom: 45px;
  height: 95vh;
`;

function DetailPage() {
  const { productId } = useParams();
  const { isLoading, data } = useQuery([`product${productId}`, productId], () =>
    getDetail(productId)
  );
  //console.log(isLoading, data);
  return (
    <Wrapper>
      {isLoading ? null : <DetailHeader productName={data.name} />}
      <Board>
        <h1>상세 페이지 입니다</h1>
      </Board>
    </Wrapper>
  );
}

export default DetailPage;
