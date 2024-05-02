import './NavMobileFooter.css'
export default function Footer() {
    return (
        <div className={'nav_footer_container'}>
            <div className={'nav_footer_profile_icon'}></div>
            <div className={'nav_footer_profile_data'}>
                <p className={'nav_footer_profile_data'}>Test User</p>
                <p className={'nav_footer_profile_email'}>testuser@email.com</p>
            </div>
        </div>
    )
}