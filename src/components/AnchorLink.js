import React from 'react';
import { Link } from 'react-router-dom';

export const SocialLinkItem = ({ link, path, isExternal, title }) => (
    <li>
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

