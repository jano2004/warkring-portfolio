export function FeatureCard({ cssVariables, isDarkMode, colors, header, text }) {
    const styles = {
        featuresCard: {
            background: colors.cardBackgroundColor(isDarkMode),
            borderRadius: '20px',
            boxShadow: isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.5)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
            marginLeft: cssVariables['--width_outside_card_space'],
            marginRight: cssVariables['--width_outside_card_space'],
            scrollSnapAlign: 'center',
            paddingTop: cssVariables['--height_body_to_body_space'],
            paddingBottom: cssVariables['--height_body_to_body_space'],
            paddingLeft: cssVariables['--width_inside_card_space'],
            paddingRight: cssVariables['--width_inside_card_space'],
        },
        featureCardHeader: {
            margin: '0%',
            fontSize: cssVariables['--font_body_heading'],
            marginBottom: cssVariables['--height_body_to_body_space'],
        },
        featureCardText: {
            margin: '0%',
            fontSize: cssVariables['--font_body_text'],
            lineHeight: '1.1',
        }
    }
    return (
        <div style={styles.featuresCard}>
            <h2 style={styles.featureCardHeader}>{ header }</h2>
            <p style={styles.featureCardText}>{ text }</p>
        </div>
    )
}