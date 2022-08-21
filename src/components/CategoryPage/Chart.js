import ApexChart from "react-apexcharts";
import styled from "styled-components";

const ChartWrapper = styled.div`
  display: block;
  width: calc(100vw - 32px);
`;

function Chart({ priceData }) {
  return (
    <ChartWrapper>
      <ApexChart
        type="area"
        series={[
          {
            name: "Price",
            data: priceData.map((e) => parseInt(e.price)),
          },
        ]}
        options={{
          theme: {
            mode: "light",
          },
          chart: {
            width: 400,
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
            text: `${priceData.length}일 전보다 ${
              priceData[priceData.length - 1].price - priceData[0].price
            }원 올랐어요.`,
            align: "left",
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: "14px",
              fontWeight: "bold",
              fontFamily: undefined,
              color: "#263238",
            },
          },
          subtitle: {
            text: "농산물 유통정보 KAMIS",
            align: "left",
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
              width: "120%",
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
            tickAmount: 7,
          },
          yaxis: {
            opposite: true,
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
              format: "dd MMM",
            },
            y: {
              formatter: (value) => `
              ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
              `,
            },
          },
        }}
      />
    </ChartWrapper>
  );
}

export default Chart;