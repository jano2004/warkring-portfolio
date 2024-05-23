export const colors  = {
    mainBackgroundColor: (isDarkMode) => {
        return isDarkMode ? '#161616' : '#F8F8F8'
    },
    mainTextColor: (isDarkMode) => {
        return isDarkMode ? '#F8F8F8' : '#161616';
    },
    cardBackgroundColor: (isDarkMode) => {
        return isDarkMode ? '#0e0e0e' : '#f4f4f4';
    },
    cardBorderColor: (isDarkMode) => {
        return isDarkMode ? '#2e2e2e' : '#cacaca';
    },
    navItemSelectedColor: (isDarkMode) => {
        return isDarkMode ? '#ffffff' : '#000000';
    },
    navItemUnselectedColor: (isDarkMode) => {
        return isDarkMode ? '#cdcdcd' : '#818181';
    },
    buttonColor: (isDarkMode) => {
        return isDarkMode ? '#cdcdcd' : '#292929';
    },
    selectableTileUnselectedColor: (state) => {
        return state ? '#191919' : '#f3f3f3';
    },
    coloredSelectableTile: (positionIndex) => {
        return positionIndex === 'first' ? '#1697A6'
            : positionIndex === 'second' ? '#FFB3AE'
                : positionIndex === 'third' ? '#F47068' : null;
    },
}