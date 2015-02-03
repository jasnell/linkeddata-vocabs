/**
 * Copyright 2013 James M Snell (jasnell@gmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
require('./vocabulary')(
  exports,
  'http://ns.jasnell.me/activitystreams-ex#', 'asx',
  [
   'LanguageProperty', 'Number', 'Date', 'PossiblyOrdered',
   'indexRange', 
   'publishedRange', 
   'startTimeRange'
  ]
);

