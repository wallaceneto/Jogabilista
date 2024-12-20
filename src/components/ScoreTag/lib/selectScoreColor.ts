import { ITheme } from "../../../themes";

const selectColor = (quality: number, interest: number, colors: ITheme) => {
  const goodQuality = (quality > 5);
  const goodInterest = (interest > 5);

  if (goodQuality && goodInterest) {
    return colors.commonColors.score.good;
  } else if (!goodQuality && !goodInterest) {
    return colors.commonColors.score.bad;
  } else {
    return colors.commonColors.score.medium;
  }
}

export { selectColor }