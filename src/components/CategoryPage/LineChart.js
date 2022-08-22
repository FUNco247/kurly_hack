import { filterProps } from "framer-motion";
import ApexChart from "react-apexcharts";
import styled from "styled-components";

const ChartWrapper = styled.div`
  margin-top: 32px;
  display: block;
  width: calc(100vw - 32px);
`;

const DataOrigin = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #999999;
  float: right;
  padding: 0;
  margin: 0;
`;

function LineChart({ priceData }) {
  //console.log(priceData);
  let sortData = [];
  for (let i = 0; i < priceData.length; i++) {
    const data = { x: priceData[i].date.slice(5), y: priceData[i].price };
    sortData.push(data);
  }
  return (
    <ChartWrapper>
      <ApexChart
        type="line"
        series={[
          {
            name: "가격",
            data: sortData,
          },
        ]}
        options={{
          markers: { size: 4 },
          theme: {
            mode: "light",
          },
          chart: {
            width: 500,
            height: 300,
            stroke: {
              curve: "smooth",
            },
            background: undefined,
            foreColor: "#999999",
            toolbar: { show: false },
          },
          dataLabels: {
            enabled: false,
          },
          title: {
            text: `일 평균 ${(
              ((priceData[priceData.length - 1].price - priceData[0].price) *
                100) /
              (priceData[0].price * priceData.length)
            ).toFixed(0)}% 상숭중이에요`,
            align: "left",
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: "18px",
              fontWeight: "500",
              fontFamily: undefined,
              color: "#333333",
            },
          },
          subtitle: {
            text: `2주 전보다 ${(
              priceData[priceData.length - 1].price - priceData[0].price
            )
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 올랐어요.`,
            align: "left",
            style: {
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: undefined,
              color: "#999999",
            },
          },
          colors: ["#5f0080", "#d4c2dc", "#f7f7f7"],
          fill: {
            type: "gradient",
          },
          grid: {
            show: true,
            borderColor: "#f4f4f4",
          },
          xaxis: {
            axisBorder: {
              show: true,
              color: "#78909C",
              height: 1,
              width: "116%",
              offsetX: 0,
              offsetY: 3,
            },
            axisTicks: { show: false },
            labels: {
              show: true,
              style: {
                fontSize: "11px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 500,
                cssClass: "apexcharts-xaxis-label",
              },
            },
            categories: priceData.map((e) => e.date),
            tickAmount: 4,
          },
          yaxis: {
            opposite: true,
            axisTicks: { show: false },
            tickAmount: 4,
            show: true,
            labels: {
              show: true,
              align: "center",
              formatter: (value) => value / 1000,
              style: {
                fontSize: "11px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 500,
                cssClass: "apexcharts-xaxis-label",
              },
            },
          },

          tooltip: {
            x: {
              show: true,
              format: "DDD MM",
            },
            y: {
              formatter: (value) => `
              ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
              `,
            },
          },
        }}
      />
      <DataOrigin>KAMIS 농산물 유통 정보 · 천 원</DataOrigin>
    </ChartWrapper>
  );
}

export default LineChart;
