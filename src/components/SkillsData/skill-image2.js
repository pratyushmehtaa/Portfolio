import aws from './svg/aws.svg';
import cplusplus from './svg/cplusplus.svg';
import css from './svg/css.svg';
import git from './svg/git.svg';
import html from './svg/html.svg';
import javascript from './svg/javascript.svg';
import postman from './svg/postman.svg';
import postgresql from './svg/postgresql.svg';
import python from './svg/python.svg';
import react from './svg/react.svg';
import vitejs from './svg/vitejs.svg';
import c from './svg/c.svg';
import nodejs from './svg/nodejs.svg';
import express from './svg/expressjs.svg';
import nextjs from './svg/nextjs.svg';
import mysql from './svg/mysql.svg';
import googlecollab from './svg/googlecollab.svg';

export const skillsImage2 = (skill) => {
  const skillID2 = skill.toLowerCase();
  switch (skillID2) {
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
    case 'c':
      return c;
    case 'postman':
      return postman;
    case 'nodejs':
      return nodejs;
    case 'expressjs':
      return express;
    case 'nextjs':  
      return nextjs;
    case 'mysql':
      return mysql;
    case 'googlecollab':
      return googlecollab;

    default:
      return null;
  }
};
