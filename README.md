# ezscrollup ![npm package](https://img.shields.io/badge/npm-1.0.0-red.svg)

## Overview
ezscrollup 



## Features
- Scroll up 
- Supports all the browsers
- Set arrow color
- Set background color
- Hide/show automatically base on the current scroll position
- Change scroll behavior

## Usage

###### Installation

```npm i ezscrollup```

###### Update
```npm update ezscrollup```

###### Import

```import EZScrollUp from 'ezscrollup';```

## Examples
- Using the default configurations
```js
<EZScrollUp/>
```
- Using different background, color, behavior and always visible.
```js
<EZScrollUp 
    alwaysVisible={true}
    background="black"
    color="#ffffff",
    behavior="auto"
/>
```

###### Available params
- alwaysVisible: optional boolean
- background: optional string
- color: optional color
- behavior optional behavior. smooth | auto | initial | inherit


## Credits
This module was inspired and created by [@jerryurenaa](http://jerryurenaa.com)


## License
ezscrollup is [MIT](https://github.com/Nerdtrix/FetchAsync/blob/main/LICENSE.md) licensed.


###### Powered by [Nerdtrix.com](http://nerdtrix.com)