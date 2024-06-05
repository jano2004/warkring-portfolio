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
      <HeaderSection cssVariables={cssVariables} isDarkMode={isDarkMode} colors={colors}/>
      <FeaturesSection cssVariables={cssVariables} isDarkMode={isDarkMode} colors={colors}/>
    </div>
  );
}

export default MainBody;