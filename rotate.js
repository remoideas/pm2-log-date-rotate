const schedule = require("node-schedule");
const path = require("path");
var fs = require("fs");
const moment = require("moment");

module.exports = () => {
  //   moveFile();
  const job = schedule.scheduleJob(process.env.CRON, moveFile);
};

moveFile = () => {
  let newName = getName() + ".log";

  let oldPath = path.join(process.env.PM2_LOG_DIR);
  let newPath = path.join(process.env.ROTATE_LOG_DIR, newName);

  console.log("Cron iniciado file - ", oldPath, newPath);

  if (fs.existsSync(oldPath)) {
    fs.rename(oldPath, newPath, function (err) {
      if (err) throw err;
      console.log("Log creado por fecha - ", newName);
    });
  }
};

getName = () => {
  return getDate();
};

getDate = (format = "YYYY-MM-DD") => {
  return moment().format(format);
};
