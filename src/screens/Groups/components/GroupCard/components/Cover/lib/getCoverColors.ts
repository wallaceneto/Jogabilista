import { ITheme } from "../../../../../../../themes";

const getCoverColor = (platform: string, colors: ITheme) => {
  switch (platform) {
    case 'Xbox':
      return colors.commonColors.tag.xbox;
    case 'Playstation':
      return colors.commonColors.tag.playstation;
    case 'Pc':
      return colors.commonColors.tag.pc;
    case 'Nintendo':
      return colors.commonColors.tag.nintendo;
    default:
      return colors.commonColors.score.empty;
  }
}

export { getCoverColor }