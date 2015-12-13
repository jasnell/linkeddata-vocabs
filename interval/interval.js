'use strict';

require('vocabs')(
  exports,
  'http://ns.jasnell.me/interval#', 'i',
  [
    'lower', 'upper', 'step',
    'Interval', 'OpenInterval', 'ClosedInterval',
    'OpenClosedInterval', 'ClosedOpenInterval',
    'LeftOpenInterval', 'LeftClosedInterval',
    'RightOpenInterval', 'RightClosedInterval',
    'EmptyInterval', 'UnboundedInterval',
    'PositiveIntegers', 'NonNegativeIntegers',
    'NegativeIntegers', 'PositiveFloats',
    'NonNegativeFloats', 'NegativeFloats',
    'PositiveDoubles', 'NonNegativeDoubles',
    'NegativeDoubles', 'PositiveDecimals',
    'NonNegativeDecimals', 'NegativeDecimals',
    'indexRange',
    'publishedRange',
    'startTimeRange'
  ]
);
