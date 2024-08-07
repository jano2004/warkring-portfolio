import React from 'react';
import { cssVariables } from "../../../../Services/abstand";
import useDarkMode from "../../../../Services/ThemeService/ThemeService";
import { colors } from "../../../../Services/ThemeService/Colors";
import { FeaturesSection } from './Components/Molecules/FeatureSection/FeatureSection';
import { HeaderSection } from './Components/Molecules/HeaderSection/HeaderSection';
import { CodeSection } from './Components/Molecules/CodeSection/CodeSection';

export function MainBody() {
  const [isDarkMode] = useDarkMode();

  return (
    <div style={{width: "100%"}}>
      <HeaderSection />
      <FeaturesSection cssVariables={cssVariables} isDarkMode={isDarkMode} colors={colors}/>
      <CodeSection />
    </div>
  );
}

export default MainBody;