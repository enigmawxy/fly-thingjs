/**
 * @author: 张攀钦
 * @description:摄像头类，采集摄像头用到
 */
class Video extends THING.Thing {
    constructor(app = uino.app) {
        // 不传 app 报错。
        super(app);
        this._init();
    }
    // 调用创建对象需要绑定的事件之类的数据
    _init() {
        this.on('alarm', ev => {
            this.style.color = ev.color;
        });
    }
    changOutLineColor() {
        this.style.color = 'yellow';
    }
    // 触发告警事件
    triggerAlarm(eventData, tag) {
        this.trigger('alarm', eventData, tag);
    }
}
THING.factory.registerClass('Video', Video);
class VideoFactory {
    static createVideo(obj) {
        return VideoFactory.app.create(obj);
    }
    static getVideos() {
        return VideoFactory.app.query('.Video');
    }
}
VideoFactory.app = uino.app;
