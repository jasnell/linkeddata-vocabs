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
  'http://www.w3.org/ns/activitystreams#', 'as', 
  [ 'Accept', 'Activity', 'IntransitiveActivity', 'ActivityHandler', 'Actor', 'Achieve', 'Add',
    'Album', 'Announce', 'Application', 'Arrive', 'Article', 'Assign', 
    'Audio', 'Block', 'BrowserView', 'Collection', 'Confirm', 'Connect', 
    'Content', 'Create', 'Delete', 'Device', 'Dislike', 'Document', 
    'EmbeddedView', 'SeamlessEmbeddedView', 'Event', 'Favorite', 'Folder', 
    'Follow', 'Flag', 'FriendRequest', 'Give', 'Group', 'HtmlForm', 'HttpHeader',
    'HttpRequest', 'Ignore', 'Image', 'Invite', 'Join', 'Leave', 'Like',    
    'Link', 'Mention', 'Note', 'Object', 'Offer', 'OrderedCollection',
    'Organization', 'Page', 'Parameter', 'Payload', 'Person', 'Place',    
    'PossibleAnswer', 'Post', 'Process', 'Question', 'Reject', 'Remove',    
    'Reservation', 'Review', 'Role', 'Save', 'Service', 'Share', 'Story',    
    'TentativeAccept', 'TentativeReject', 'Undo', 'Update', 'UrlTemplate',    
    'Video', 'Experience', 'View', 'Watch', 'Listen', 'Read', 'Respond',    
    'Move', 'Travel', 'Complete', 
    'action', 'actor', 'attributedTo', 'attributedWith', 'actorOf', 'attachedTo',    
    'attachment', 'attachments', 'author', 'authorOf', 'bcc', 'bto', 'cc',    
    'context', 'contextOf', 'current', 'first', 'generator', 'generatorOf',    
    'handlerFor', 'hasExpectedInput', 'hasPotentialResult', 'hasPreference',    
    'hasRequirement', 'hreftemplate', 'icon', 'iconFor', 'image', 'imageOf',
    'inReplyTo', 'items', 'orderedItems','last', 
    'location','locationOf', 'memberOf','next','object','objectOf','oneOf',
    'anyOf','origin','originOf','parameter','prev',
    'preview','previewOf','provider','providerOf','replies','result','resultOf',
    'scope','scopeOf','self','shape','tag','tagOf','tags','target','targetOf','to',
    'url','using','alias','altitude','browserContext','confirm','content',
    'displayName','downstreamDuplicates','duration',
    'endTime','height','href','hreflang','id','itemsPerPage','latitude','longitude',
    'mediaType','method','name','objectType','priority','published','radius','rating',
    'rel','sandbox','startIndex','startTime','summary','template',
    'title','totalItems','units','updated','upstreamDuplicates','verb','width',
    'optional','role','accuracy'
  ]
);

