import { MdOutlineWork, MdPlaylistPlay, MdMarkunread } from "react-icons/md";
import { TimelineCellProps } from "../components/timeline-cell/timeline-cell";

const style = {
  contentStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
  iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
  contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
};

export const data: TimelineCellProps[] = [
  {
    ...style,
    date: "2011 - present",
    icon: <MdPlaylistPlay />,
    title: "Creative Director",
    location: "Miami, FL",
    detail:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    ...style,
    date: "2010 - 2011",
    icon: <MdOutlineWork />,
    title: "Art Director",
    location: "San Francisco, CA",
    detail:
      "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
  },
  {
    ...style,
    date: "2008 - 2010",
    icon: <MdMarkunread />,
    title: "Web Designer",
    location: "Los Angeles, CA",
    detail: "User Experience, Visual Design",
  },
  {
    ...style,
    date: "2006 - 2008",
    icon: <MdOutlineWork />,
    title: "Creative Director",
    location: "San Francisco, CA",
    detail: "User Experience, Visual Design",
  },
];
