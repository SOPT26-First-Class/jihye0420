## User Table
| userIdx | id | name | password | 
| ---- | ------ | ---- | ---- |
| 0 | jihye | 황지혜 | 0420 | 
| 1 | Ella | 천유정 | 0616 | 

## Article Table

| articIdx | author | title | contents | likes |
| ---- | ---- | ---- | ---- |---- |
| 0 | 오바마 | 버락오바마 | 정치 | 2 | 
| 1 | 트럼프 | 도날드트럼프 | 코로나 | 3 | 

## Like Table

| userIdx | articIdx |
| ---- | ---- |
| 0 | 1 |
| 1 | 0 |

## Comment Table

| articIdx | userIdx | comment |
| ---- | ---- | ---- |
| 0 | 1 | love 
| 1 | 0 | angry