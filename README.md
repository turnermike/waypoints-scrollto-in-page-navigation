# Osler - Threshold Microsite

## MAMP Configuration

### Hosts File

File location: /private/etc/hosts

Add the following:

```
127.0.0.1       osler-threshold.dev
```

### Apache Virtual Hosts

File location: /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf

Add the following:

```
<VirtualHost *:80>
DocumentRoot "~/Sites/GoCactus/osler/threshold-microsite/deploy"
ServerName osler-threshold.dev
</VirtualHost>
```

## Foundation Details

Additions to Foundation's default package include:

* Stylesheets have been broken up into multiple files. One for small, medium and large. As well as a settings file and mixins file.
* A default Javascript class has been added to app.js.
* A small debug element has been added to the bottom left corner to indicate screen width and current stylesheet in use.
* Support for IE8 has been added, thanks to James Cocker. (http://foundation.zurb.com/forum/posts/241-foundation-5-and-ie8)

### Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`

### Quickstart

1. Change into the /library/ directory.
2. Type 'compass watch', press enter.

### Thanks

1. Zurb Foundation
2. James Cocker - IE8 compatibility



