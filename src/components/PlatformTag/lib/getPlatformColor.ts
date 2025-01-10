import { ITheme } from "../../../themes";

const getPlatformColor = (platform: string, color: ITheme) => {
  switch (platform) {
    case 'Nintendo':
      return color.commonColors.tag.nintendo;
    case 'Playstation':
      return color.commonColors.tag.playstation;
    case 'Xbox':
      return color.commonColors.tag.xbox;
    case 'PC':
      return color.commonColors.tag.pc;
    default:
      return color.commonColors.score.empty;
  }
}

export { getPlatformColor }