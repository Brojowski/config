# Workbench Diff
Workbench Diff allows you to compare two records within Salesforce Workbench

## Install
- [UserScript](https://raw.githubusercontent.com/Brojowski/config/master/workbench-diff/workbench-diff.user.js)
- [UserStyle](https://raw.githubusercontent.com/Brojowski/config/master/workbench-diff/workbench-diff.user.css)

## Usage
1. Open the first record in workbench, the URL should look something like: 
```
https://workbench.developerforce.com/retrieve.php?id=<SFDC-ID>
```
2. Get the Id of the record to compare
3. Add this to the end of the URL, replacing <SFDC-ID2> with the second Id
```
&diff=<SFDC-ID2>
```

The whole URL should look like this:
```
https://workbench.developerforce.com/retrieve.php?id=<SFDC-ID>&diff=<SFDC-ID2>
```
