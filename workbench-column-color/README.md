# Workbench Column Color
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