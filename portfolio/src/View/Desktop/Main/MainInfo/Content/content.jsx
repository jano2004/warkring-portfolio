import { ICONS } from "./icons";

export const content = {
    SECTION: {
        LEFT: {
            ALIGNMENT: 'left',
            CONTENT: {
                TOP: {
                    size: null,
                    header: '',
                    text: 'LEFT_TOP',
                    icon: ICONS.LEFT.TOP,
                    transition: {
                        X: 'translateX(-50%)',
                        Y: 'translateY(-50%)'
                    }
                },
                BOTTOM: {
                    size: null,
                    header: '',
                    text: 'LEFT_BOTTOM',
                    icon: ICONS.LEFT.BOTTOM,
                    transition: {
                        X: 'translateX(-50%)',
                        Y: 'translateY(50%)'
                    }
                }
            }
        },
        CENTER: {
            ALIGNMENT: null,
            CONTENT: {
                TOP: {
                    size: null,
                    header: '',
                    text: 'CENTER_TOP',
                    icon: ICONS.CENTER.TOP,
                    transition: {
                        X: 'translateX(0%)',
                        Y: 'translateY(-50%)'
                    }
                },
                CENTER: {
                    size: '196',
                    header: '',
                    text: 'CENTER_CENTER',
                    icon: ICONS.CENTER.CENTER
                },
                BOTTOM: {
                    size: null,
                    header: '',
                    text: 'CENTER_BOTTOM',
                    icon: ICONS.CENTER.BOTTOM,
                    transition: {
                        X: 'translateX(0%)',
                        Y: 'translateY(50%)'
                    }
                }
            }
        },
        RIGHT: {
            ALIGNMENT: 'right',
            CONTENT: {
                TOP: {
                    size: null,
                    header: '',
                    text: 'RIGHT_TOP',
                    icon: ICONS.RIGHT.TOP,
                    transition: {
                        X: 'translateX(50%)',
                        Y: 'translateY(-50%)'
                    }
                },
                BOTTOM: {
                    size: null,
                    header: '',
                    text: 'RIGHT_BOTTOM',
                    icon: ICONS.RIGHT.BOTTOM,
                    transition: {
                        X: 'translateX(50%)',
                        Y: 'translateY(50%)'
                    }
                }
            }
        }
    }
};