# Pulsemob Backoffice
Before run the steps presented here, you should follow [these instructions](https://github.com/Infobase/pulsemob_webservices).
## 1. Go to a suitable installation directory and checkout the pulsemob backoffice source:

```sh
$ git clone git://github.com/Infobase/pulsemob_backoffice.git
```

## 2. Set server and solr urls
Open *app.js*.
```sh
# Replace /folder/root for pulsemob_backoffice root path.
$ vim /folder/root/pulsemob_backoffice/app/scripts/app.js
```

Change the lines 244, 245 e 246 for:
```js
"WS": "http://url_base/webservices/backoffice",
"BASE_URL": "http://url_base",
"SOLR_URL": "http://url_base"
```
Replace "*url_base*" for your url base.

## 3. Building
Install nodejs, npm, grunt and bower.
```sh
$ sudo yum install nodejs npm
$ sudo npm install -g grunt-cli
$ sudo npm install -g bower
```
Build.
```sh
# Open pulsemob_backoffice root (replace /folder/root for pulsemob_backoffice root path).
$ cd /folder/root/pulsemob_backoffice
$ npm install
# Add --allow-root if you're running as root.
$ bower install
# Add --allow-root if you're running as root.
$ bower update
$ grunt build
```

## 4. Setting Nginx
Open *pulsemob.conf* in Nginx folder.
```sh
$ vim /etc/nginx/conf.d/pulsemob.conf
```
Locate the following block and change the *alias* parameter according to your pulsemob_backoffice root path.

```conf
# Pulsemob backoffice settings.
location /pulsemob_backoffice {
    alias /folder/root/pulsemob_backoffice/dist;
    index index.html index.htm;
}
```