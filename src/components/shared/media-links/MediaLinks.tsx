import { mediaLinks } from "@constants/index";

import { navToExternalLink } from "@helpers/index";

import { IconOnlyButton } from "@components/index";

import styles from "./MediaLinks.module.css";

const MediaLinks = (): JSX.Element => {
  return (
    <menu className={styles.mediaLinks}>
      {mediaLinks.map((mediaLink, i) => (
        <IconOnlyButton
          key={i}
          Icon={mediaLink.Icon}
          type="button"
          title={mediaLink.title}
          name={`btn-${mediaLink.title}`}
          variant="outline"
          onClick={() => navToExternalLink(mediaLink.href)}
        />
      ))}
    </menu>
  );
};

export default MediaLinks;
