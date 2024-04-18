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
      labels: [
        "2000",
        "2002",
        "2004",
        "2006",
        "2008",
        "2010",
        "2012",
        "2014",
        "2016",
        "2018",
        "2020",
        "2022",
      ],
      datasets: [
        {
          label: "ESG Score",
          data: [0, 10, 20, 30, 40, 100, 60, 200, 20, 90, 100, 110],
          borderWidth: 2,
          borderColor: colorScheme ? getColor("primary") : "",
          backgroundColor: "transparent",
          pointBorderColor: "transparent",
          tension: 0.4,
        },
        {
          label: "Social",
          data: [0, 100, 600, 300, 400, 500, 600, 700, 800, 900, 1000, 1100],
          borderWidth: 3,
          borderDash: [2, 2],
          borderColor: colorScheme ? getColor("success") : "",
          backgroundColor: "transparent",
          pointBorderColor: "transparent",
          tension: 0.4,
        },
        {
          label: "Environmental",
          data: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550],
          borderWidth: 3,
          borderDash: [2, 2],
          borderColor: colorScheme ? getColor("warning") : "",
          backgroundColor: "transparent",
          pointBorderColor: "transparent",
          tension: 0.4,
        },
        {
          label: "Governance",
          data: [0, 300, 400, 560, 320, 600, 720, 850, 100, 805, 1200, 1010],
          borderWidth: 3,
          borderDash: [2, 2],
          borderColor: colorScheme ? getColor("danger") : "",
          backgroundColor: "transparent",
          pointBorderColor: "transparent",
          tension: 0.4,
        },
      ],
    };
  }, [colorScheme, darkMode]);

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: getColor("slate.900", 0.8),
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 12,
            },
            color: getColor("slate.900", 0.8),
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
        y: {
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
            color: darkMode
              ? getColor("slate.900", 0.3)
              : getColor("slate.300"),
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
      type="line"
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
  lineColor: "",
  className: "",
};

export default Main;
