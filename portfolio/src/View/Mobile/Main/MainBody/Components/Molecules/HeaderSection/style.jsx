import { cssVariables } from "../../../../../../../Services/abstand";
import { colors } from "../../../../../../../Services/ThemeService/Colors";

const firstHeightSpace = parseFloat(cssVariables['--height_section_space']) + parseFloat(cssVariables['--height_body_to_body_space']);
const firstWidthSpace = parseFloat(cssVariables['--width_outside_card_space']) + parseFloat(cssVariables['--width_inside_card_space']);

export const style = {
    sloganSection: {
      marginTop: cssVariables['--height_section_space'],
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    availableLamp: {
      width: '13px',
      height: '13px',
      background: '#529552',
      borderRadius: '50%',
      marginRight: cssVariables['--width_inside_card_space'],
    },
    sloganText: {
      fontSize: cssVariables['--font_body_text'],
      color: colors.mainTextColor,
      fontWeight: '200',
      margin: '0'
    },
    headerSection: {
      width: '100%', 
      display: 'flex', 
      justifyContent: 'center',
    },
    headerContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'transparent',
      marginLeft: firstWidthSpace,
      marginRight: firstWidthSpace,
      marginTop: cssVariables['--height_body_to_body_space'],
      marginBottom: firstHeightSpace,
      color: colors.mainTextColor,
    },
    headerBrandContainer: {
      main: {
        marginBottom: cssVariables['--height_section_space'],
        textAlign: 'center',
      }
    },
    headerBrandText: {
      background: 'transparent',
      fontSize: cssVariables['--font_body_text'],
      lineHeight: '1.1',
      fontWeight: '300',
    },
    textSpan: {
      color: colors.mainAccentColor,
      fontWeight: '600',
    },
    callContainer: {
      main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'transparent',
        textAlign: 'center',
        transform: 'translateY(100%)',
        opacity: 0,
        transition: 'transform 1s ease-out, opacity 1s ease-out',
      },
      flyIn: {
        transform: 'translateY(0)',
        opacity: 1,
      },
    },
    callButton: {
      background: colors.mainAccentColor,
      fontSize: cssVariables['--font_body_text'],
      border: 'none',
      borderRadius: '5px',
      padding: '8px 16px',
      color: colors.mainBackgroundColor,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      textDecoration: 'none',
      display: 'inline-block',
    },
}