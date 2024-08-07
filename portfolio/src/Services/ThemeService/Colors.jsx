export const colors  = {
    mainBackgroundColor: '#F8F8F8',
    mainTextColor: '#161616',
    mainAccentColor: 'rgba(21,33,212,0.7)',
    cardBackgroundColor: '#f4f4f4',
    cardBorderColor: '#f4f4f4',
    navItemSelectedColor: '#000000',
    navItemUnselectedColor: '#818181',
    buttonColor: '#292929',

    selectableTileUnselectedColor: (state) => {
        if(state) {
            return colors.mainAccentColor;
        } else if (!state) {
            return '#f3f3f3';
        }
    },
    selectableTileLightmode: (state) => {
        return state ? '#529552' : '#f3f3f3';
    },
    selectableTileBorderColor: '#C4C4C4',
    progressBar: () => {
        return '#529552';
    }
}