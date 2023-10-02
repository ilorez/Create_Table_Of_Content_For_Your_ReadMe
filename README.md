# Hello there



## Table of Content
- [Introduction](#introduction) 
- [For what this script](#for-what-this-script) 
- [how to use it](#how-to-use-it) 
  - [path : ](#path-) 
  - [level : ](#level-) 
- [Dummies Notes](#dummies-notes) 
 
## Introduction

this repo it's for guys who are lazy like me to create table of content to `.md` files!

## For what this script

it's just make table of content for your readme file, like the table of content upove acctuly it's created with this script.

## how to use it

you need just to copy script or clone this repo and change the `path` and `level` inside the `script.js` file.
### path : 
   - path to your readme file or any `.md` file.
### level : 
   - headers size that you want to add to table of Content for example if you want to include header 2 and 3 that start with `##` and `###` you need to send to function an array like this [2,3] or if you want just level 2 send just 2.

## Dummies Notes

you need to know that:

1. this script create table of contet for just header that created by `#`s.
2. how it's work:
   - get all title with the level you set
   - make the table of conteant and set it above first title with level that you set
