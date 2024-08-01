import { Github, Linkedin, Mail } from "iconoir-react";

import { MediaLink } from "@interfaces/data-types";

const mediaLinks: MediaLink[] = [
  {
    href: "https://github.com/AlejandroDeveloper2",
    Icon: Github,
    title: "Github",
  },
  {
    href: "https://www.linkedin.com/in/diego-alejandro-diaz-bonilla-28b3a2181/",
    Icon: Linkedin,
    title: "Linkedin",
  },
  {
    href: "mailto:diegodiazdev9817@gmail.com?subject=subject text",
    Icon: Mail,
    title: "Email",
  },
];

export default mediaLinks;
