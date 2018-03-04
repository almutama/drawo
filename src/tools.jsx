import React from "react";
import Rectangle from "./modules/Canvas/Rectangle";
import Path from "./modules/Canvas/Path";
import Circle from "./modules/Canvas/Circle";
import Point from "./modules/Canvas/Point";
import Line from "./modules/Canvas/Line";
import Icon, { ICON_COLOR, ICON_SIZE } from "./Icon";
export type Tool = "pen" | "rectangle" | "circle" | "line";

const tools: Tool[] = ["pen", "rectangle", "circle", "line"];

const iconPenPathPoints = size =>
  [
    [1 * size / 6, 3 * size / 4],
    [size / 5, size / 4],
    [size / 2, 3 * size / 4],
    [5 * size / 6, 1 * size / 6]
  ].map(([x, y]) => ({ x, y }));

const IconPen = ({ color, size }) => (
  <Icon size={size}>
    <Path
      points={iconPenPathPoints(size)}
      color={color}
      thickness={size / 10}
    />
  </Icon>
);

const IconRectangle = ({ color, size }) => (
  <Icon size={size}>
    <Rectangle
      x0={size / 4}
      y0={size / 4}
      x1={3 * size / 4}
      y1={3 * size / 4}
      color={color}
      thickness={size / 10}
    />
  </Icon>
);

const IconCircle = ({ color, size }) => (
  <Icon size={size}>
    <Circle
      x0={size / 2}
      y0={size / 2}
      r={size / 4}
      color={color}
      thickness={size / 10}
    />
  </Icon>
);

const IconLine = ({ color, size }) => (
  <Icon size={size}>
    <Line
      x0={3 * size / 4}
      y0={size / 4}
      x1={size / 3}
      y1={3 * size / 4}
      color={color}
      thickness={size / 10}
    />
  </Icon>
);

export const toolIcons = {
  pen: <IconPen color={ICON_COLOR} size={ICON_SIZE} />,
  rectangle: <IconRectangle color={ICON_COLOR} size={ICON_SIZE} />,
  circle: <IconCircle color={ICON_COLOR} size={ICON_SIZE} />,
  line: <IconLine color={ICON_COLOR} size={ICON_SIZE} />
};
export default tools;