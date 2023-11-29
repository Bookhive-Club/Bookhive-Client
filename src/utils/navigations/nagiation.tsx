import {
  HiOutlineHome,
  HiOutlineUserAdd,
  HiOutlineCollection,
  HiOutlineSpeakerphone,
  HiHome,
  HiSpeakerphone,
  HiCollection,
  HiUsers,
} from "react-icons/hi";
const dashboardHeaderNav = [
  {
    title: "Home",
    icon: <HiOutlineHome size="1.2em" />,
    active: <HiHome size="1.2em" />,
    path: "/dashboard",
  },

  {
    title: "Book Clubs",
    icon: <HiOutlineUserAdd size="1.2em" />,
    active: <HiUsers />,
    path: "/dashboard/book_club",
  },

  // {
  //   title: "Reading List",
  //   icon: <HiOutlineCollection size="1.2em" />,
  //   active: <HiCollection />,
  //   path: "/dashboard/reading_list",
  // },
  // {
  //   title: "Discover",
  //   icon: <HiOutlineCollection size="1.2em" />,
  //   active: <HiCollection />,
  //   path: "/dashboard/discover",
  // },
  {
    title: "Marketplace",
    icon: <HiOutlineCollection size="1.2em" />,
    active: <HiCollection />,
    path: "/dashboard/marketplace",
  },

  {
    title: "Community",
    icon: <HiOutlineSpeakerphone size="1.2em" />,
    active: <HiSpeakerphone />,
    path: "/dashboard/community",
  },
];

export { dashboardHeaderNav };
