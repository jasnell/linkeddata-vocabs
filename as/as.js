'use strict';

const context = require('activitystreams-context');
const ignore = ['@vocab', 'xsd', 'as', 'id', 'type'];
const terms = {
  *[Symbol.iterator]() {
    for (let term of Object.keys(context['@context']))
      if (ignore.indexOf(term) < 0)
        yield term;
  }
};

require('vocabs')(exports, context['@context'].as, 'as', terms);
