import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "../data/timeline-data";
import TimelineCell from "../components/timeline-cell/timeline-cell";

export default function TimelinePage() {
  return (
    <div>
      <h1>Timeline</h1>
      <VerticalTimeline lineColor={"gray"}>
        {data.map((timelineData) => (
          <TimelineCell {...timelineData}></TimelineCell>
        ))}
      </VerticalTimeline>
    </div>
  );
}
