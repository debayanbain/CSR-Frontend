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
      labels: ["Sprts & Cul", "Skill Dev", "Livelyhood", "Education"],
      datasets: [
        {
          label: "Spent",
          barPercentage: 0.5,
          barThickness: 8,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [4.5, 3.5, 0.9, 1],
          backgroundColor: colorScheme ? getColor("primary") : "",
        },
        {
          label: "Approved",
          barPercentage: 0.5,
          barThickness: 8,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [2.8, 4.8, 2.3, 1.2],
          backgroundColor: colorScheme ? getColor("success") : "",
        },
        {
          label: "Unspent",
          barPercentage: 0.5,
          barThickness: 8,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [5, 3, 3.1, 3],
          backgroundColor: colorScheme ? getColor("warning") : "",
        },
      ],
    };
  }, [colorScheme, darkMode]);

  const options: ChartOptions = useMemo(() => {
    return {
      indexAxis: "y",
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            boxHeight: 10,
            boxWidth: 10,
            color: getColor("slate.900", 0.8),
          },
        },
      },
      scales: {
        x: {
          stacked: true,
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
            display: false,
          },
          border: {
            display: false,
          },
        },
        y: {
          stacked: true,
          ticks: {
            font: {
              size: 12,
            },
            color: getColor("slate.900", 0.8),
          },
          grid: {
            color: darkMode
              ? getColor("slate.900", 0.3)
              : getColor("slate.500"),
          },
          border: {
            dash: [2, 2],
            display: false,
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
