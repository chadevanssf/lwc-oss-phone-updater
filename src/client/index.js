// use SLDS in LWC OSS with Synthentic DOM https://github.com/pmdartus/lwc-slds/commit/f5d96a261199c358bbada751e7bc5722b0562d82
import '@lwc/synthetic-shadow';

import { createElement } from 'lwc';
import MyApp from 'my/app';

const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
