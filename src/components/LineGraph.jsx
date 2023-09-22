import { Line } from "react-chartjs-2";

export default function LineGraph(props) {
  return (
    <Line
      data={props.dataset}
      options={{
        scales: {
          x: {
            title: { display: true, text: props.xTitle },
          },
          y: {
            title: { display: true, text: props.yTitle },
          },
        },
      }}
    ></Line>
  );
}
