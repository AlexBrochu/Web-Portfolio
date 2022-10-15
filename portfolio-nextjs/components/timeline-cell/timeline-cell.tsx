import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { ReactElement } from "react";

export type TimelineCellProps = {
  icon: ReactElement<any, any>;
  detail: string;
  title: string;
  location: string;
  iconStyle: Object;
  contentStyle: Object;
  contentArrowStyle: Object;
  date: string;
};

export default function TimelineCell(props: TimelineCellProps) {
  const {
    icon,
    detail,
    title,
    location,
    iconStyle,
    contentStyle,
    contentArrowStyle,
    date,
  } = props;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={date}
      iconStyle={iconStyle}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{location}</h4>
      <p>{detail}</p>
    </VerticalTimelineElement>
  );
}
