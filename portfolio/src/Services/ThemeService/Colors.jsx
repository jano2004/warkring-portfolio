export const colors  = {
    mainBackgroundColor: (isDarkMode) => {
        return isDarkMode ? '#161616' : '#F8F8F8'
    },
    mainTextColor: (isDarkMode) => {
        return isDarkMode ? '#F8F8F8' : '#161616';
    },
    mainAccentColor: '#529552',
    cardBackgroundColor: (isDarkMode) => {
        return isDarkMode ? '#282828' : '#f4f4f4';
    },
    cardBorderColor: (isDarkMode) => {
        return isDarkMode ? '#2e2e2e' : '#f4f4f4';
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
    selectableTileUnselectedColor: (state, isDarkMode) => {
        if (isDarkMode) {
            if(state) {
                return '#529552';
            } else if (!state) {
                return '#2C2C2CFF';
            }
        } else {
            if(state) {
                return '#529552';
            } else if (!state) {
                return '#f3f3f3';
            }
        }
    },
    selectableTileLightmode: (state) => {
        return state ? '#529552' : '#f3f3f3';
    },
    selectableTileBorderColor: (isDarkMode) => {
        return isDarkMode ? '#3a3a3a' : '#C4C4C4';
    },
    progressBar: () => {
        return '#529552';
    }
}