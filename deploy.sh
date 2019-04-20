#!/usr/bin/env sh

set -e

npm run docs:build

cd 2.0/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://${GITHUB_TOKEN}@github.com/EasyDingTalk/easydingtalk.github.io.git master

cd -
