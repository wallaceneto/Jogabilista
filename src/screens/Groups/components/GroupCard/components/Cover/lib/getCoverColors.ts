import { IPlatform } from "../../../../../../../global/types";
import { ITheme } from "../../../../../../../themes";

const getCoverColor = (colors: ITheme, platform?: IPlatform) => {
  switch (platform) {
    case 'Xbox':
      return colors.commonColors.tag.xbox;
    case 'Playstation':
      return colors.commonColors.tag.playstation;
    case 'PC':
      return colors.commonColors.tag.pc;
    case 'Nintendo':
      return colors.commonColors.tag.nintendo;
    default:
      return colors.commonColors.score.empty;
  }
}

export { getCoverColor }