import { navigationItems } from "@constants/index";
import { NavItemsProps } from "@interfaces/component-types";

import { NavItem } from "@components/index";

import styles from "./Navigation.module.css";

const NavItems = ({ itemsRange }: NavItemsProps): JSX.Element => {
  return (
    <li className={styles.items}>
      <ul>
        {navigationItems
          .slice(itemsRange.start, itemsRange.end)
          .map((navItem, i) => (
            <li key={i}>
              <NavItem navItem={navItem} />
            </li>
          ))}
      </ul>
    </li>
  );
};

export default NavItems;
