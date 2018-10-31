import React from 'react';
import { SocialLinkItem } from './AnchorLink';
import github from '../assets/images/github.svg';
import twitter from '../assets/images/twitter.svg';
import telegram from '../assets/images/telegram.png';
import slack from '../assets/images/slack.png';

const SocialLinks = () => (
    <ul className="sticky">
        <SocialLinkItem
            link="https://github.com/iamonuwa"
            path={github}
            isExternal={true}
            title="Github" />
        <SocialLinkItem
            link="https://twitter.com/iamonuwa"
            path={twitter}
            isExternal={true}
            title="Twitter" />
        <SocialLinkItem
            link="https://telegram.org/iamonuwa"
            path={telegram}
            isExternal={true}
            title="Telegram" />
        <SocialLinkItem
            link="https://slack.com/iamonuwa"
            path={slack}
            isExternal={true}
            title="Slack" />
    </ul>
);

export default SocialLinks;