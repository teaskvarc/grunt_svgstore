# grunt_svgstore
Working from the quintessential "folder full of SVGs". Each file.svg represents some graphic we want to use on the site.
We want to squish all that into a SVG defs block that is ready to use. 

#### Put in project folder different SVG icons

#### First I made file: package.json and wrote this down

```
 {
      "name": "grunt_svgstore",
      "version": "0.1.0",
      "devDependencies": {
        "grunt": "~0.4.5",
        "grunt-svgstore": "^1.0.0"   // this was made by default
      }
    }

```

#### Second
```
$npm install
```
#### Third
```
$npm install grunt-svgstore --save-dev
```
#### Fourth: I made gruntfile.js, there I wrote down code

#### To run code: 
```
$grunt svgstore
```
#### Fifth:
##### File: includes was made by default, inside it: defs.svg with SVG icons

#### Sixth: 
##### In gruntfile.js I added another line of code (formatting) for nicer code in defs.svg





