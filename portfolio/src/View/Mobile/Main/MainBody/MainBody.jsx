import React from 'react';
import { cssVariables } from "../../../../Services/abstand";
import useDarkMode from "../../../../Services/ThemeService/ThemeService";
import { colors } from "../../../../Services/ThemeService/Colors";
import { FeaturesSection } from './Components/Molecules/FeatureSection';
import { HeaderSection } from './Components/Molecules/HeaderSection';

export function MainBody() {
  const [isDarkMode] = useDarkMode();

  return (
    <div style={{width: "100%"}}>
      <div style={{
        marginTop: cssVariables['--height_section_space'],
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: '13px',
          height: '13px',
          background: colors.mainAccentColor,
          borderRadius: '50%',
          marginRight: cssVariables['--width_inside_card_space'],
        }}/>
        <p style={{
          fontSize: cssVariables['--font_body_text'],
          color: colors.mainTextColor(isDarkMode),
          fontWeight: '200',
          margin: '0'
        }}>
          Freie Kapazitäten für Juni/2024
        </p>
      </div>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <HeaderSection cssVariables={cssVariables} isDarkMode={isDarkMode} colors={colors}/>
      </div>
      <FeaturesSection cssVariables={cssVariables} isDarkMode={isDarkMode} colors={colors}/>
    </div>
  );
}

export default MainBody;