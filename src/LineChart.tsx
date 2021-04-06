import React from "react";

import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from "react-vis";

const Line: React.FC<{ data: { x: number; y: number }[] }> = function Line({
  data,
}) {
  return data.length ? (
    <XYPlot width={600} height={600}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      <ChartLabel
        text="Day"
        className="alt-x-label"
        includeMargin={false}
        xPercent={0.025}
        yPercent={1.01}
      />
      <ChartLabel
        text="Price"
        className="alt-y-label"
        includeMargin={false}
        xPercent={0.06}
        yPercent={0.06}
        style={{
          transform: "rotate(-90)",
          textAnchor: "end",
        }}
      />
      <LineSeries className="first-series" data={data} />
    </XYPlot>
  ) : (
    <></>
  );
};
export default Line;
