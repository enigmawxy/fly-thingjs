// 创建一个地球
const app = new THING.App({
    // 指定 3d 容器 div标签 的id属性值
    container: 'div3d',
    url: 'https://www.thingjs.com/static/models/storehouse',
    enableUseHighestVersionResource: false
});
uino.app = app;
uino.app.on(THING.EventType.Load, ev => {
    uino.app.level.change(ev.campus);
});
