import { Photo } from "@assets/index";

import { useThemeStore } from "@store/index";

import styles from "./ProfilePhoto.module.css";

const ProfilePhoto = (): JSX.Element => {
  const { theme } = useThemeStore();

  return (
    <figure
      className={styles.profilePhotoContainer}
      style={{
        color: `var(--${theme})`,
        backgroundColor: `var(--${theme}-opacity-5)`,
      }}
    >
      <img className={styles.profilePhoto} alt="Foto de perfil" src={Photo} />
    </figure>
  );
};

export default ProfilePhoto;
