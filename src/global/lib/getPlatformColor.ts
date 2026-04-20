import { useContext } from "react";
import { ThemeContext } from "../../storage/context";

const getPlatformColor = (platform: string) => {
  const { colors } = useContext(ThemeContext);

  switch (platform) {
    case 'Nintendo':
      return colors.commonColors.tag.nintendo;
    case 'Playstation':
      return colors.commonColors.tag.playstation;
    case 'Xbox':
      return colors.commonColors.tag.xbox;
    case 'PC':
      return colors.commonColors.tag.pc;
    default:
      return colors.commonColors.score.empty;
  }
}

export { getPlatformColor }