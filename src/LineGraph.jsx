import { Line } from "react-chartjs-2";

function LineGraph({ dataset, yTitle, xTitle }) {
  return (
    <Line
      data={dataset}
      options={{
        scales: {
          x: {
            title: { display: true, text: xTitle },
          },
          y: {
            title: { display: true, text: yTitle },
          },
        },
      }}
    ></Line>
  );
}

export default LineGraph;
