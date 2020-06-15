#/bin/bash

BASE_PATH=`cd $(dirname $0);pwd -P`
BASE_PATH=`cd $(dirname $BASE_PATH);pwd -P`

cd $BASE_PATH

npm run build:lp

rm -rf dist

mkdir dist

cp packages/scroll-active/dist/scroll-active.js dist/scroll-active.js
cp packages/vue-scroll-active/dist/vue-scroll-active.js dist/vue-scroll-active.js

echo "--- build 完毕 >_<#@! ---"
