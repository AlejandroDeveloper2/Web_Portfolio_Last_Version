import { CSSProperties } from "react";

import { ButtonVariantType, LogoSizeType } from "@interfaces/component-types";
import { ThemeModeType } from "@interfaces/data-types";
import { AnimatedBar, ScreenType } from "@interfaces/data-types";

export const getButtonIconLabelStyle = (
  theme: ThemeModeType,
  variant: ButtonVariantType
) => {
  const style: CSSProperties =
    variant === "outline"
      ? { color: `var(--${theme})` }
      : { color: "var(--bg-color)" };
  return style;
};

export const getGrid = (rows: number, columns: number) => {
  const rowsArray: string[] = new Array(rows).fill(".");
  const columnsArray: string[] = new Array(columns).fill(".");

  return { rowsArray, columnsArray };
};

export const getGridSize = (size: LogoSizeType): number[] => {
  const sizeResult =
    size === "small" ? [14, 6] : size === "medium" ? [20, 6] : [25, 8];

  return sizeResult;
};

export const getLoadingBars = (
  screenWidth: number,
  screenType: ScreenType
): AnimatedBar[] => {
  const barWidth: number =
    screenType === "Mobile" ? 20 : screenType === "Tablet" ? 30 : 40;
  const barsAmount: number = (screenWidth * 0.6) / barWidth;
  const bars: number = Math.floor(barsAmount);

  const loadingBars: AnimatedBar[] = new Array(bars).fill({
    scaleY: 0,
  });

  const updatedLoadingBars = loadingBars.map((bar) => ({
    ...bar,
    scaleY: Math.random() * 200,
  }));

  return updatedLoadingBars;
};

export const navToFromButton = (href: string): void => {
  const a = window.document.createElement("a");
  a.href = href;
  a.click();
  a.remove();
};

export const navToExternalLink = (href: string): void => {
  const a = window.document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.click();
  a.remove();
};

export const downloadCv = (): void => {
  const a = window.document.createElement("a");
  a.download = "Cv-DiegoDiaz";
  a.href = "/pdfs/cv-DiegoAlejandroDiaz.pdf";
  a.click();
  a.remove();
};
