import { ICONS, DESCRIPTION } from "./Contents";

export const content = {
    SECTION: {
        LEFT: {
            ALIGNMENT: 'left',
            CONTENT: {
                TOP: {
                    SIZE: null,
                    HEADER: DESCRIPTION.LEFT.TOP.HEADER,
                    TEXT: DESCRIPTION.LEFT.TOP.TEXT,
                    ICON: ICONS.LEFT.TOP,
                    TRANSITION: {
                        X: 'translateX(-50%)',
                        Y: 'translateY(-50%)'
                    },
                    DESTINATION: '/video-transparenz'
                },
                BOTTOM: {
                    SIZE: null,
                    HEADER: DESCRIPTION.LEFT.BOTTOM.HEADER,
                    TEXT: DESCRIPTION.LEFT.BOTTOM.TEXT,
                    ICON: ICONS.LEFT.BOTTOM,
                    TRANSITION: {
                        X: 'translateX(-50%)',
                        Y: 'translateY(50%)'
                    },
                    DESTINATION: '/video-codebase'
                }
            }
        },
        CENTER: {
            ALIGNMENT: null,
            CONTENT: {
                TOP: {
                    SIZE: null,
                    HEADER: DESCRIPTION.CENTER.TOP.HEADER,
                    TEXT: DESCRIPTION.CENTER.TOP.TEXT,
                    ICON: ICONS.CENTER.TOP,
                    TRANSITION: {
                        X: 'translateX(0%)',
                        Y: 'translateY(-50%)'
                    },
                    DESTINATION: '/video-weltweit'
                },
                CENTER: {
                    SIZE: '240',
                    HEADER: DESCRIPTION.CENTER.CENTER.HEADER,
                    TEXT: DESCRIPTION.CENTER.CENTER.TEXT,
                    ICON: ICONS.CENTER.CENTER,
                    DESTINATION: '/video-sicherheit'
                },
                BOTTOM: {
                    SIZE: null,
                    HEADER: DESCRIPTION.CENTER.BOTTOM.HEADER,
                    TEXT: DESCRIPTION.CENTER.BOTTOM.TEXT,
                    ICON: ICONS.CENTER.BOTTOM,
                    TRANSITION: {
                        X: 'translateX(0%)',
                        Y: 'translateY(50%)'
                    },
                    DESTINATION: '/video-skalierbarkeit'
                }
            }
        },
        RIGHT: {
            ALIGNMENT: 'right',
            CONTENT: {
                TOP: {
                    SIZE: null,
                    HEADER: DESCRIPTION.RIGHT.TOP.HEADER,
                    TEXT: DESCRIPTION.RIGHT.TOP.TEXT,
                    ICON: ICONS.RIGHT.TOP,
                    TRANSITION: {
                        X: 'translateX(50%)',
                        Y: 'translateY(-50%)'
                    },
                    DESTINATION: '/video-angebot'
                },
                BOTTOM: {
                    SIZE: null,
                    HEADER: DESCRIPTION.RIGHT.BOTTOM.HEADER,
                    TEXT: DESCRIPTION.RIGHT.BOTTOM.TEXT,
                    ICON: ICONS.RIGHT.BOTTOM,
                    TRANSITION: {
                        X: 'translateX(50%)',
                        Y: 'translateY(50%)'
                    },
                    DESTINATION: '/video-datensicherheit'
                }
            }
        }
    }
};