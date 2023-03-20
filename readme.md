# Installed Styles

Quick links to the [Stylus](https://github.com/openstyles/stylus)([Firefox]|[Chrome]) that I use. (Mostly so I can restore them all easily)

- [Github Dark](https://raw.githubusercontent.com/StylishThemes/GitHub-Dark/master/github-dark.user.css)
- [Stack Overflow Dark](https://raw.githubusercontent.com/StylishThemes/StackOverflow-Dark/master/stackoverflow-dark.user.css)
- [Wikipedia Dark](https://raw.githubusercontent.com/StylishThemes/Wikipedia-Dark/master/wikipedia-dark.user.css)
- [Quora Dark](https://raw.githubusercontent.com/StylishThemes/Quora-Dark/master/quora-dark.user.css)
- [Google Clean Dark](http://userstyles.org/styles/144028)
- [Stylus Extension Dark](https://raw.githubusercontent.com/Brojowski/custom-styles/master/stylus-ext.user.css)
- [GitLab Simple Dark](https://userstyles.org/styles/125366/gitlab-simple-dark)

[Firefox]: https://addons.mozilla.org/en-US/firefox/addon/styl-us/
[Chrome]: https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=en





# Select To Input

Large select boxes are a pain to find the element you want. This script replaces them with an input selector, which enables typing to search for the item.

## Installation

- [UserScript](https://raw.githubusercontent.com/Brojowski/config/master/select-to-input/select-to-input.user.js)

## Usage

1. Go to Workbench (or another site this is enabled for)
2. Click on the select field
3. Type to search or scroll to find the item.

 - To clear out the field, double click.

 - Add your own URLs to use this on other sites.
```js
// @match        https://workbench.developerforce.com/*
```





# Workbench Column Colorizer
This script will color a column of the query results table based on the content of the cells.

## Install
[Userscript](https://raw.githubusercontent.com/Brojowski/config/master/workbench-column-color/workbench-column-color.user.js)

## Usage
1. Make sure the user script is enabled. 
2. Execute a query in workbench
3. Double click on the column header of a column
    - If there are less than 269 unique cells, it will used the cached colors
    - If there are more than 269 unique cells, it will need to generate colors, this can take a while

**Note:** The column Id colors are NOT synced across columns.





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





# Workbench Preview

Opens the hovered ID in a preview screen on the right side

## Installation

- [UserScript](https://raw.githubusercontent.com/Brojowski/config/master/workbench-preview/workbench-preview.user.js)
- [UserStyle](https://raw.githubusercontent.com/Brojowski/config/master/workbench-preview/workbench-preview.user.css)

## Usage

1. Open Workbench
2. Perform query (make sure an ID field is returned)
3. Hover over the ID, it will open on the right side.





# Salesforce Profile Switcher

Quickly switch profiles without leaving the object view.

## Installation

- [UserScript](https://raw.githubusercontent.com/Brojowski/config/master/salesforce/profile-switch/profile-switch.user.js)

## Usage

1. In Salesforce setup, navigate to the profile list. The "User Profiles" header should turn green.
2. Navigate into a profile ([Enhanced Profile User Interface](https://help.salesforce.com/s/articleView?id=sf.users_profiles_about_enhanced_ui.htm&type=5) must be enabled)
3. The profile header should turn green and there is a profile dropdown below it.
4. Select a new profile from the dropdown. The page will navigate to the new profile, but stay on the same setting (ie. keeps the same object)



<span hidden>
Format this document:
Find: `(^\n)+# `
Replace: `\n\n\n\n\n# `
</span>






# Salesforce Workbench Opener

Open workbench in non-Chromium browsers (if your browser is Chromium based, use [this extension](https://chrome.google.com/webstore/detail/workbench-tools-for-googl/nanhambbggdgkloeldahjngdmngjgmhk))

## Installation

- [UserScript](https://raw.githubusercontent.com/Brojowski/config/master/salesforce/open-workbench/open-workbench.user.js)

## Usage

1. Create a bookmark with the url: `javascript:void(document.location.pathname = "/home/home.jsp&workbench=true")`
2. Click the bookmark while on a SalesForce page
3. It should redirect first to Classic, then to Workbench