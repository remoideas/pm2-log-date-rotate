Script to rotate the pm2 logs by date and show the logs on a browser.

To start

`pm2 start .`

To use we need to edit the `.env`

```
PORT=5051
ROTATE_LOG_DIR=C:\Users\xxxxx\.pm2\logs
PM2_LOG_DIR=C:\Users\xxxxx\.pm2\logs
USERLOGIN=logs
PASSWORD=123456
CRON="* * * * *"
```
