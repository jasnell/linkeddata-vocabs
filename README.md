## Linked Data Vocabulary Definition Constants

### Usage with JSPM

``` bash
jspm install github:jasnell/linkeddata-vocabs
```

In code you import the required vocabulary

``` js
import {schema, rdfs} from 'jasnell/linkeddata-vocabs';

// some have terms already there
var schemaName = schema.name;

// otherwise combine manually with the namespace
var rdfsLabel = rdfs.ns + 'label';

// finally there is default prefix
var schemaPrefix = schema.prefix;
```

The list of contained vocabularies can be seen [here][https://github.com/jasnell/linkeddata-vocabs/blob/master/vocabs/vocabs.js]
