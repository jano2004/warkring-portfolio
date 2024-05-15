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
        return isDarkMode ? '' : '#cacaca';
    },
    navItemSelectedColor: (isDarkMode) => {
        return isDarkMode ? '#ffffff' : '#000000';
    },
    navItemUnselectedColor: (isDarkMode) => {
        return isDarkMode ? '#cdcdcd' : '#818181';
    }
}
