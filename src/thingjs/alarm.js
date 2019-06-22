uino.thingjsUtil.createWidgetButton('全局触发告警', ev => {
    AlarmManage.globalTriggerAlarm({ name: '陈平安', native: '落魄山' }, 'app-global');
});
uino.thingjsUtil.createWidgetButton('摄像头触发告警', ev => {
    const video = uino.app.query('.Video')[0];
    video.triggerAlarm({ name: '宁姚', native: '倒悬山' });
});
uino.app.on('Alarm', ev => {
    console.log('全局事件', ev);
});
setInterval(() => {
    $.ajax({
        url: '/alarm',
        type: 'get',
        success(data) {
            if (data.code === 200) {
                console.log(data);
                data.data.forEach(item => {
                    const video = app.query(item.name)[0];
                    video.triggerAlarm(item);
                });
            }
        }
    });
}, 2000);
