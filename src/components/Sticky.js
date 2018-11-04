import React from 'react'
import { Link } from 'react-static';
import github from '../assets/images/github.svg'
import twitter from '../assets/images/twitter.svg'
import telegram from '../assets/images/telegram.png'
import slack from '../assets/images/slack.png'

const StickyItem = ({ link, path, isExternal, title }) => (
    <li onClick={() => window.open(link, '_blank')}>
        {(isExternal) ?
            <a
                href={link}
                target='_blank'
                rel="noopener noreferrer">
                <img className="img-fluid" width={32} src={path} alt={path} />
                <span>{title}</span>
            </a>
            :
            <Link
                to={link}>
                <img className="img-fluid" width={32} src={path} alt={path} />
                <span>{title}</span>
            </Link>
        }
    </li>
);


const StickyComponent = () => (
    <ul className="sticky">
        <StickyItem
            link="https://github.com/iamonuwa"
            path={github}
            isExternal={true}
            title="Github" />
        <StickyItem
            link="https://twitter.com/iamonuwa"
            path={twitter}
            isExternal={true}
            title="Twitter" />
        <StickyItem
            link="https://telegram.org/iamonuwa"
            path={telegram}
            isExternal={true}
            title="Telegram" />
        <StickyItem
            link="https://slack.com/iamonuwa"
            path={slack}
            isExternal={true}
            title="Slack" />
    </ul>
);

export default StickyComponent;