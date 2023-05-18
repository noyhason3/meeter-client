import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.scss'
import { faBarsStaggered, faComment, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    return <section className="footer">
        <div className="footer-tools-personal"><FontAwesomeIcon icon={faUser} /></div>
        <div className="footer-tools-slides"><FontAwesomeIcon icon={faBarsStaggered} fontSize={'18px'} /></div>
        <div className="footer-tools-likes"><FontAwesomeIcon icon={faHeart} /></div>
        {/* <div className="footer-tools-likes"><FontAwesomeIcon icon={faHeart} style={{ color: "#a2a8b3" }} /></div> */}
        <div className="footer-tools-chats"><FontAwesomeIcon icon={faComment} /></div>
    </section>
}