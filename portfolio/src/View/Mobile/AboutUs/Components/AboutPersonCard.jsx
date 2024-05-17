import React from "react";

export default function ShowPersonCard({ person, isMirrored = false, cssVariables }) {
    const styles = {
        personCard_section: {
            backgroundColor: 'transparent',
            width: '100%',
            display: 'flex',
            flexDirection: isMirrored ? 'row-reverse' : 'row',
            justifyContent: isMirrored ? 'flex-end' : 'flex-start',
            marginBottom: cssVariables['--height_body_to_body_space'],
            alignItems: 'center'
        },
        personCard_image: {
            backgroundColor: 'transparent',
            height: '120px',
            width: '120px',
            flexShrink: 0
        },
        personCard_image_img: {
            backgroundColor: 'red',
            height: '100%',
            width: '100%',
            borderRadius: '50%',
            objectFit: 'cover' // ensuring the image fits well within the border radius
        },
        personCard_content: {
            backgroundColor: 'transparent',
            overflow: 'hidden',
            marginLeft: isMirrored ? 0 : cssVariables['--width_inside_card_space'],
            marginRight: isMirrored ? cssVariables['--width_inside_card_space'] : 0
        },
        personCard_header: {
            backgroundColor: 'transparent',
            fontSize: cssVariables['--font_body_heading'],
            fontWeight: 'bold',
            margin: 0,
            marginBottom: cssVariables['--height_body_attached_space'],
        },
        personCard_text: {
            backgroundColor: 'transparent',
            fontSize: cssVariables['--font_body_text'],
            fontWeight: 400, // "regular" is not a valid value for font-weight
            margin: 0,
        }
    };

    return (
        <div style={styles.personCard_section}>
            <div style={styles.personCard_image}>
                <div style={styles.personCard_image_img}></div>
            </div>
            <div style={styles.personCard_content}>
                <h2 style={styles.personCard_header}>{person.personName}</h2>
                <p style={styles.personCard_text}>{person.personText}</p>
            </div>
        </div>
    );
}
