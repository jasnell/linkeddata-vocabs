'use strict';

const context = require('activitystreams-context');
const ignore = new Set(['@vocab', 'xsd', 'as', 'id', 'type', 'inbox']);

const terms = {
  *[Symbol.iterator]() {
    for (let term of Object.keys(context['@context']))
      if (!ignore.has(term))
        yield term;
  }
};

require('vocabs')(exports, context['@context'].as, 'as', terms);
