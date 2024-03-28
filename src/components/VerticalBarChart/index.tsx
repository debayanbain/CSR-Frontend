import Chart from "@/components/Base/Chart";
import { ChartData, ChartOptions } from "chart.js/auto";
import { getColor } from "@/utils/colors";
import { selectColorScheme } from "@/stores/colorSchemeSlice";
import { selectDarkMode } from "@/stores/darkModeSlice";
import { useAppSelector } from "@/stores/hooks";
import { useMemo } from "react";

interface MainProps extends React.ComponentPropsWithoutRef<"canvas"> {
  width: number;
  height: number;
}

function Main(props: MainProps) {
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const data: ChartData = useMemo(() => {
    return {
      labels: ["Jan,2024"],
      datasets: [
        {
          label: "Open Cases",
          barPercentage: 0.5,
          barThickness: 15,
          maxBarThickness: 30,
          minBarLength: 2,
          data: [1, 0],
          backgroundColor: colorScheme ? getColor("red.500") : "",
        },
        {
          label: "Close Cases",
          barPercentage: 0.5,
          barThickness: 15,
          maxBarThickness: 30,
          minBarLength: 2,
          data: [0.5, 0],
          backgroundColor: darkMode
            ? getColor("darkmode.200")
            : getColor("green.500"),
        },
      ],
    };
  }, [colorScheme, darkMode]);

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: getColor("black"),
          },
          position: 'bottom',
        },
      },
      responsive: true,
      scales: {
        x: {
          ticks: {
            font: {
              size: 10,
            },
            color: getColor("slate.500", 0.8),
          },
          grid: {
            drawOnChartArea: false,  // Hide the X-axis grid lines
            display: true,
          },
          border: {
            display: true,
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              size: 10,
            },
            color: getColor("slate.500", 0.8),
            callback: function (value) {
              return value;
            },
          },
          grid: {
            drawOnChartArea: false,  // Hide the y-axis grid lines
            display: true, 
        },
          border: {
            display: true,
          },
        },
      },
    };
  }, [colorScheme, darkMode]);

  return (
    <Chart
      type="bar"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
    />
  );
}

Main.defaultProps = {
  width: "auto",
  height: "auto",
  className: "",
};

export default Main;
