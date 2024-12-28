import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faInstagram, faLinkedin, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export type ContactInfo = {
  name: string;
  value: string;
  url: string;
  icon: IconDefinition;
};

export const contactInfos: ContactInfo[] = [
  {
    name: 'Email',
    value: 'abagheri1994@gmail.com',
    url: 'mailto:abagheri1994@gmail.com',
    icon: faEnvelope,
  },
  {
    name: 'LinkedIn',
    value: 'abagheri1994',
    url: 'https://www.linkedin.com/in/abagheri1994/',
    icon: faLinkedin,
  },
  {
    name: 'Instagram',
    value: 'pooriabgr',
    url: 'https://www.instagram.com/pooriabgr/',
    icon: faInstagram,
  },
  {
    name: 'Telegram',
    value: 'pooriabgr',
    url: 'https://t.me/pooriabgr',
    icon: faTelegram,
  },
  {
    name: 'GitHub',
    value: 'doiali',
    url: 'https://www.github.com/doiali/',
    icon: faGithub,
  },
  {
    name: 'X',
    value: 'doiali',
    url: 'https://x.com/doiali',
    icon: faXTwitter,
  },
];