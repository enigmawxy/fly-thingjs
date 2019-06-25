let interval;
new THING.widget.Button(
    '开启查询告警信息',
    ev => {
        interval = setInterval(() => {
            const video = createVideo();

            $.ajax({
                url: '/fly/alarm',
                type: 'get',
                dataType: 'json',
                success(data) {
                    const i = Math.round(Math.random() * 10);
                    data.data.forEach((item, index) => {
                        if (i != index) {
                            return;
                        }
                        if (video) {
                            video.triggerAlarm(item);
                        }
                    });
                },
                error(error) {
                    console.error(error);
                }
            });
        });
    },
    10000
);
new THING.widget.Button('关闭查询告警信息', ev => {
    if (interval) {
        clearInterval(interval);
    }
});
