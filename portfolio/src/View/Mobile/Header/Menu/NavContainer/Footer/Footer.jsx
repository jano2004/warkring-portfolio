import './NavMobileFooter.css'
export default function Footer() {
    return (
        <div className={'nav_footer_container'}>
            <div className={'nav_footer_contact_data'}>
                <p className={'nav_footer_contact_data'}>WARKRING</p>
                <p className={'nav_footer_contact_email'}>kontakt@warkring.org</p>
            </div>
            <div className={'nav_footer_impressum_blog'}>
                <p className={'nav_footer_impressum'}>IMPRESSUM</p>
                <p className={'nav_footer_blog'}>BLOG</p>
            </div>
        </div>
    )
}