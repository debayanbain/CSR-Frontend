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
      labels: ["Clean Cooking", "Chullah", "Solar", "Charging"],
      datasets: [
        {
          label: "Phase 1",
          barPercentage: 0.5,
          barThickness: 20,
          maxBarThickness: 30,
          minBarLength: 2,
          data: [5, 1, 5, 10],
          backgroundColor: colorScheme ? getColor("primary") : "",
        },
        {
          label: "Phase 2",
          barPercentage: 0.5,
          barThickness: 20,
          maxBarThickness: 30,
          minBarLength: 2,
          data: [5, 10, 2, 5],
          backgroundColor: colorScheme ? getColor("danger") : "",
        },
        {
          label: "Phase 3",
          barPercentage: 0.5,
          barThickness: 20,
          maxBarThickness: 30,
          minBarLength: 2,
          data: [5, 5, 7, 10],
          backgroundColor: colorScheme ? getColor("dark") : "",
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
            boxWidth: 10,
            boxHeight: 10,
            color: getColor("black"),
          },
          position: "bottom",
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
          ticks: {
            font: {
              size: 12,
            },
            color: getColor("slate.900", 0.8),
          },
          grid: {
            drawOnChartArea: false, // Hide the X-axis grid lines
            display: true,
          },
          border: {
            display: true,
          },
        },
        y: {
          stacked: true,
          beginAtZero: true,
          ticks: {
            font: {
              size: 12,
            },
            color: getColor("slate.900", 0.8),
            callback: function (value) {
              return value;
            },
          },
          grid: {
            drawOnChartArea: false, // Hide the y-axis grid lines
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
    <div className="w-[350px] md:w-auto">
      <Chart
        type="bar"
        data={data}
        options={options}
        width={props.width}
        height={props.height}
      />
    </div>
  );
}

Main.defaultProps = {
  width: "auto",
  height: "auto",
  className: "",
};

export default Main;
