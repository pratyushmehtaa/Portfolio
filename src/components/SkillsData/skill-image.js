import aws from './svg/aws.svg';
import cplusplus from './svg/cplusplus.svg';
import css from './svg/css.svg';
import git from './svg/git.svg';
import html from './svg/html.svg';
import javascript from './svg/javascript.svg';

import postgresql from './svg/postgresql.svg';
import python from './svg/python.svg';
import react from './svg/react.svg';
import vitejs from './svg/vitejs.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'aws':
      return aws;
    case 'c++':
      return cplusplus;
    case 'css':
      return css;
    case 'git':
      return git;
    case 'html':
      return html;
    case 'javascript':
      return javascript;

    case 'postgresql':
      return postgresql;
    case 'python':
      return python;
    case 'react':
      return react;
    case 'vitejs':
      return vitejs;
    default:
      return null;
  }
};
