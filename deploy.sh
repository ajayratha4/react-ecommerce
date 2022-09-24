#!/bin/sh
npm run prod
sudo cp -r build /var/www/html/
