# About

This project is for exploring Oracle JET framework. The initial files are generated using
`ojet create myojet` with a blank template.

References:
- https://oraclejet.org
- https://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html
- https://www.oracle.com/webfolder/technetwork/jet/jsdocs/oj.ojRadioset.html

## Local Cookbook

We can explore some JET cookbook examples locally here by creating a html file under `src/cookbook`.
The files will be auto copy to `web` folder when you run `ojet serve`, hence it can accessible by 
`http://localhost:8080/cookbook/<file.html>`

NOTE: The `cookbook/<file.html>` file will not be accessible as standalone HTML (or using WebStorm
local host server!). It must be served using `ojet serve` command.
