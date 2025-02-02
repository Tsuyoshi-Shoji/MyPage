import style from '@/styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faXTwitter,
    faInstagram,
    faGithub
} from '@fortawesome/free-brands-svg-icons'

export default function Social({ iconSize = 'initial' }) {
    return (
        <ul className= {style.list} style={{ '--icon-size': iconSize}}>
            <li>
                <a href='https://twitter.com/' />
                <FontAwesomeIcon icon={faXTwitter} />
                <span className='sr-only'>X</span>
            </li>
            <li>
                <a href='https://instagram.com/' />
                <FontAwesomeIcon icon={faInstagram} />
                <span className='sr-only'>instagram</span>
            </li>
            <li>
                <a href='https://github.com/' />
                <FontAwesomeIcon icon={faGithub} />
                <span className='sr-only'>Github</span>
            </li>
        </ul>
    )
}