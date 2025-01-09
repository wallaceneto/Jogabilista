import { ITheme } from "../../../themes";

const selectColor = (colors: ITheme, quadrant?: string) => {
  switch (quadrant) {
    case 'Bom':
      return colors.commonColors.score.good;
    case 'Mediano':
      return colors.commonColors.score.medium;
    case 'Ruim':
      return colors.commonColors.score.bad;
    default:
      return colors.commonColors.score.empty;
  }
}

export { selectColor }