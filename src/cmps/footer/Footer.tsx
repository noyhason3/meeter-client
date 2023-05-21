import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.scss'
import { faBarsStaggered, faComment, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate();

    const handleNavigate = (routeName: string) => {
        navigate(routeName); // Replace '/other-route' with the desired route path
    };

    return <section className="footer">
        <div className="footer-tools-personal" onClick={() => handleNavigate('/personal')}><FontAwesomeIcon icon={faUser} /></div>
        <div className="footer-tools-slides" onClick={() => handleNavigate('/')}><FontAwesomeIcon icon={faBarsStaggered} fontSize={'18px'} /></div>
        <div className="footer-tools-likes" onClick={() => handleNavigate('/likes')}><FontAwesomeIcon icon={faHeart} /></div>
        <div className="footer-tools-chats" onClick={() => handleNavigate('/chats')}><FontAwesomeIcon icon={faComment} /></div>
        {/* <div className="footer-tools-likes"><FontAwesomeIcon icon={faHeart} style={{ color: "#a2a8b3" }} /></div> */}
    </section>
}