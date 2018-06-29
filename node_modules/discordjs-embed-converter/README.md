# discordjs-embed-converter

## Install

`npm install discordjs-embed-converter`

## Usage
### MessageEmbed to RichEmbed
Requiring this directly gives a function that can convert MessageEmbeds to RichEmbeds. Example:

```js
const msgEmbedToRich = require("discordjs-embed-converter");
msgEmbedToRich(someMessageEmbed);
```

Or, if you think that is too vague or something, it also has a circular named msgEmbedToRich.

```js
const msgEmbedToRich = require("discordjs-embed-converter").msgEmbedToRich;
// or
const { msgEmbedToRich } = require("discordjs-embed-converter");
```

### The other way around

There is also a property of the requiring named RichToMsgEmbed, which can convert RichEmbeds to MessageEmbed, however note that it will lose its `.message` property.

```js
const richToMsgEmbed = require("discordjs-embed-converter").richToMsgEmbed;
// or
const { richToMsgEmbed } = require("discordjs-embed-converter");
```

then:

```js
richToMsgEmbed(SomeRichEmbed);
```
