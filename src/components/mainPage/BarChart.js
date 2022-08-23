import ApexChart from "react-apexcharts";
import styled from "styled-components";

const ChartWrapper = styled.div`
  display: block;
  width: calc(100vw - 32px);
  margin-top: 32px;
`;

function BarChart({ priceData }) {
  const sortData = priceData.filter((e) => e.y > 0);
  sortData.sort(function (a, b) {
    return b.y - a.y;
  });
  return (
    <ChartWrapper>
      <ApexChart
        type="bar"
        series={[
          {
            name: "인상률",
            data: sortData,
            /* data: [
              { x: "사과", y: 20 },
              { x: "배", y: 10 },
            ],*/
          },
        ]}
        options={{
          chart: {
            type: "bar",
            width: 400,
            height: 300,
            background: undefined,
            foreColor: "#999999",
            toolbar: { show: false },
          },
          tooltip: {
            x: {
              show: true,
            },
            y: {
              formatter: (value) => `
              ${value}%
              `,
            },
          },
          yaxis: {
            show: true,
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
              align: "center",
              formatter: (value) => `
              ${value}%
              `,
              style: {
                fontSize: "13px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 400,
                cssClass: "apexcharts-xaxis-label",
              },
            },
            tickAmount: 4,
          },
          xaxis: {
            axisBorder: {
              show: false,
            },
            style: {
              fontSize: "13px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
          },
          title: {
            text: "가격이 오르고 있는 상품 TOP5",
            align: "left",
            margin: 0,
            offsetX: 8,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: "18px",
              fontWeight: "600",
              fontFamily: "Helvetica, Arial, sans-serif",
              color: "#333333",
            },
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#5f0080"],
          grid: {
            show: false,
          },
        }}
      />
    </ChartWrapper>
  );
}

export default BarChart;
