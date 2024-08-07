export default function FeatureCard({ cssVariables, isDarkMode, colors, header, text, activate, isMirrored=false }) {
    const styles = {
        featuresCard: {
            background: 'transparent',
            color: colors.mainTextColor(isDarkMode),
            textAlign: 'center',
            paddingLeft: cssVariables['--width_inside_card_space'],
            paddingRight: cssVariables['--width_inside_card_space'],
            marginBottom: cssVariables['--height_section_space'],
            opacity: 0,
            transform: 'translateX(-50%)',
            transition: 'all 0.3s ease-in-out',
        },
        featuresCardMirrored: {
            background: 'transparent',
            color: colors.mainTextColor(isDarkMode),
            textAlign: 'center',
            paddingLeft: cssVariables['--width_inside_card_space'],
            paddingRight: cssVariables['--width_inside_card_space'],
            marginBottom: cssVariables['--height_section_space'],
            opacity: 0,
            transform: 'translateX(50%)',
            transition: 'all 0.3s ease-in-out',
        },
        slideIn: {
            opacity: 1,
            transform: 'translateY(0%)'
        },
        featureCardHeader: {
            margin: '0%',
            color: colors.mainAccentColor,
            fontSize: cssVariables['--font_body_heading'],
            marginBottom: cssVariables['--height_body_attached_space'],
            lineHeight: '1.1',
        },
        featureCardText: {
            margin: '0%',
            fontSize: cssVariables['--font_body_text'],
            lineHeight: '1.1',
        }
    }
    return (
        <div style={isMirrored ? {...styles.featuresCardMirrored, ...(activate && styles.slideIn)} :
        {...styles.featuresCard, ...(activate && styles.slideIn)}}>
            <h2 style={styles.featureCardHeader}>{ header }</h2>
            <p style={styles.featureCardText}>{ text }</p>
        </div>
    )
}