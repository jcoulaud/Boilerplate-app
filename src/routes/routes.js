import ListLanguages from './../components/ListLanguages';
import SingleLanguage from './../components/SingleLanguage.js';

const routes = [
  { path: '/',
    component: ListLanguages,
    exact: true
  },
  { path: '/language/:language',
    component: SingleLanguage
  }
];

export default routes;
