function setDailyAlarm(hour, minute) {
  let now = new Date();
  let alarmTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hour,
    minute,
    0,
    0
  );

  if (alarmTime <= now) {
    alarmTime.setDate(alarmTime.getDate() + 1);
  }
  let delay = alarmTime.getTime() - now.getTime();

  chrome.alarms.create(hour + '-' + minute + 'Alarm', { when: Date.now() + delay });
}

setDailyAlarm(9, 0);
setDailyAlarm(12, 0);
setDailyAlarm(13, 0);
setDailyAlarm(18, 0);

chrome.alarms.onAlarm.addListener(function(alarm) {

  chrome.tabs.create({ url: "https://app.tangerino.com.br/Tangerino/pages/LoginPage" });
});