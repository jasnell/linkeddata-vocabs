'use strict';

require('vocabs')(
  exports,
  'http://www.w3.org/ns/ldp#', 'ldp',
  [
    'inbox',
    'pageSequence',
    'pageSortCollation',
    'pageSortOrder',
    'pageSortPredicate',
    'PageSortCriterion',
    'pageSortCriteria',
    'Page',
    'PreferMinimalContainer',
    'PreferEmptyContainer',
    'PreferMembership',
    'PreferContainment',
    'MemberSubject',
    'NonRDFSource',
    'IndirectContainer',
    'DirectContainer',
    'BasicContainer',
    'contains',
    'insertedContentRelation',
    'membershipResource',
    'isMemberOfRelation',
    'hasMemberRelation',
    'Container',
    'RDFSource',
    'constrainedBy',
    'member',
    'Resource'
  ]
);
