import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  email: FaEnvelope
};

const Icon = ({ name, size }) => {
    const IconComponent = icons[name];
    return <IconComponent size={size} />;
  };
  

export default Icon;

