import React, { useEffect, useState } from "react";
import Firstpage from "../Pages/Firstpage/Firstpage";
import { propsPrimaryGoal, propsSecondaryGoal, propsMainGoal } from './Content';
import './disableScroll.css';
import Header from "../../Header/Header";
import Menu from "../../Header/Menu/Menu";
import {colors} from "../../../../Services/ThemeService/Colors";
import useDarkMode from "../../../../Services/ThemeService/ThemeService";
import PersonalData from "../Pages/Personals/PersonalData";

export default function MainContact() {
   const [pageState, setPageState] = useState(0);
   const [selectedHauptziel, setSelectedHauptziel] = useState(null);
   const [selectSecondaryGoal, setSelectSecondaryGoal] = useState(null);
   const [selectMainGoal, setSelectMainGoal] = useState(null);

   const [isDarkMode] = useDarkMode()

   const [menu, setMenu] = useState(false);

   const handleMenuMobileClick = () => {
      setMenu(!menu);
   }

   const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setIsLoaded(true);
    }, []); 

   const mobileMenuStyle = {
      transition: 'transform 0.2s ease-in-out',
      width: '100%',
      transform: menu ? 'translateX(0)' : 'translateX(-100%)',
   };

   if (pageState === 0) {
      return (
          <div style={{background: colors.mainBackgroundColor(isDarkMode),
            height: '100vh',
          }}>
             <Header handleMenuMobileClick={handleMenuMobileClick}/>
             <div className={'mobileMenu'} style={mobileMenuStyle}>
                {menu && <Menu currentSelected={'kontakt'}/>}
             </div>
             <Firstpage
                 selected={selectedHauptziel}
                 setSelected={setSelectedHauptziel}
                 props={propsPrimaryGoal(selectedHauptziel)}
                 pageState={pageState}
                 setPageState={setPageState}
                 isLoaded={isLoaded}/>
          </div>
      );
   } else if (pageState === 1) {
      return (
          <div style={{background: colors.mainBackgroundColor(isDarkMode),
            height: '100vh',
          }}>
             <Header handleMenuMobileClick={handleMenuMobileClick}/>
             <div className={'mobileMenu'} style={mobileMenuStyle}>
                {menu && <Menu currentSelected={'kontakt'}/>}
             </div>
             <Firstpage
                 selected={selectSecondaryGoal}
                 setSelected={setSelectSecondaryGoal}
                 props={propsSecondaryGoal(selectedHauptziel, selectSecondaryGoal, selectMainGoal, pageState, setPageState)}
                 pageState={pageState}
                 setPageState={setPageState}
                 isLoaded={isLoaded}
             />
          </div>
      );
   } else if (pageState === 2) {
      return (
          <div style={{background: colors.mainBackgroundColor(isDarkMode),
            height: '100vh',
          }}>
             <Header handleMenuMobileClick={handleMenuMobileClick}/>
             <div className={'mobileMenu'} style={mobileMenuStyle}>
                {menu && <Menu currentSelected={'kontakt'}/>}
             </div>
             <Firstpage
                 selected={selectMainGoal}
                 setSelected={setSelectMainGoal}
                 props={propsMainGoal(selectMainGoal)}
                 pageState={pageState}
                 setPageState={setPageState}
                 isLoaded={isLoaded}
             />
          </div>
      );
   } else if (pageState === 3) {
       return (
           <div style={{background: colors.mainBackgroundColor(isDarkMode),
            height: '100vh',
           }}>
               <Header handleMenuMobileClick={handleMenuMobileClick}/>
               <div className={'mobileMenu'} style={mobileMenuStyle}>
                   {menu && <Menu currentSelected={'kontakt'}/>}
               </div>
               <PersonalData pageState={pageState} setPageState={setPageState}
                             selectedHauptziel={selectedHauptziel}
                             selectSecondaryGoal={selectSecondaryGoal}
                             selectMainGoal={selectMainGoal}/>
           </div>
       )
   }
   return null;
}
