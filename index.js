#!/usr/bin/env node
const fs = require('fs');

const args = process.argv;
const folder = args[args.length - 1];

if(folder !== '.') fs.mkdirSync(folder);

const { webpackWriter } = require('./writer/webpack-writer');
const { packageJsonWriter } = require('./writer/package-json-writer');
const { eslintWriter } = require('./writer/eslint-writer');
const { babelWriter } = require('./writer/babel-writer');
const { gitignoreWriter } = require('./writer/gitignore-writer');
const { travisWriter } = require('./writer/travis-writer');
const { srcIndexWriter } = require('./writer/src-index-writer');
const { devDependenciesInstaller } = require('./dev-dependencies-installer');
const { dependenciesInstaller } = require('./dependencies-installer');

webpackWriter(folder);
packageJsonWriter(folder);
eslintWriter(folder);
babelWriter(folder);
gitignoreWriter(folder);
travisWriter(folder);
srcIndexWriter(folder);
devDependenciesInstaller(folder);
dependenciesInstaller(folder);