import { useState, useEffect, useRef } from "react";
import { cssVariables } from "../../../../Services/abstand";
import { colors } from "../../../../Services/ThemeService/Colors";
import { FeaturesSection } from './Components/Molecules/FeatureSection/FeatureSection';
import { HeaderSection } from './Components/Molecules/HeaderSection/HeaderSection';
import { CodeSection } from './Components/Molecules/CodeSection/CodeSection';

export function MainBody() {
  const [activateFeatures, setActivateFeatures] = useState(false);
  const [activateCode, setActivateCode] = useState(false);

  const featuresRef = useRef(null);
  const codeRef = useRef(null);

  const handleScrollFeatures = (isVisible) => {
    if (isVisible && !activateFeatures) {
        setActivateFeatures(true);
    }
  };
  const handleScrollCode = (isVisible) => {
    if (isVisible && !activateCode) {
        setActivateCode(true);
    }
  };

  useEffect(() => {
    const observerFeatures = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                handleScrollFeatures(entry.isIntersecting);
            });
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        }
    );

    const observerCode = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                handleScrollCode(entry.isIntersecting);
            });
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        }
    );

    if (featuresRef.current) {
        observerFeatures.observe(featuresRef.current);
    }

    if (codeRef.current) {
        observerCode.observe(codeRef.current);
    }

    return () => {
        if (featuresRef.current) {
            // eslint-disable-next-line
            observerFeatures.unobserve(featuresRef.current);
        }
        if (codeRef.current) {
            // eslint-disable-next-line
            observerCode.unobserve(codeRef.current);
        }
  };

  // eslint-disable-next-line
  }, [featuresRef, codeRef]);

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      overflowY: 'scroll',
      scrollSnapType: 'y mandatory',
      scrollBehavior: 'smooth'
      }}>
      <HeaderSection />
      <div ref={featuresRef}>
        <FeaturesSection cssVariables={cssVariables} colors={colors} activate={activateFeatures}/>
      </div>
      <div ref={codeRef}>
        <CodeSection />
      </div>
    </div>
  );
}

export default MainBody;