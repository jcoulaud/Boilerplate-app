import ListLanguages from './../components/ListCategories';
import SingleLanguage from './../components/SingleLanguage';

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
