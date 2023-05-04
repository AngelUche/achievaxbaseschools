import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";

// footer data for the grid property
export const FooterGridData = [
  {
    id: 1,
    header: "About Us",
    paragraph1: "About",
    para2: "Meet the Principle",
    Para3: "Our Facilities",
    para4: "Our Management board",
  },
  {
    id: 2,
    header: "Admissions",
    paragraph1: "Apply to ABS",
    para2: "Examination Centres",
    Para3: "Admissions Criteria",
    para4: "Online Application Form",
  },
  {
    id: 3,
    header: "Academics",
    paragraph1: "Pre-schoo",
    para2: "Junior School",
    Para3: "Senior School",
    para4: "Learning Resources",
  },
];

// social icon data to be rendered on the footer
export const SocialIcons = [
  {
    id: 1,
    icons: <BsTwitter />,
    links: "https://twitter.com/",
  },
  {
    id: 2,
    icons: <BsFacebook />,
    links: "https://facebook.com/",
  },
  {
    id: 3,
    icons: <BsInstagram />,
    links: "https://www.instagram.com",
  },
  {
    id: 4,
    icons: <BsYoutube />,
    links: "https://www.youtube.com",
  },
  {
    id: 5,
    icons: <BsLinkedin />,
    links: "https://www.linkedin.com",
  },
];
