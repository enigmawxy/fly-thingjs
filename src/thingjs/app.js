// 创建一个地球
const app = new THING.App({
    // 指定 3d 容器 div标签 的id属性值
    container: 'div3d',
    url: 'https://www.thingjs.com/static/models/storehouse',
    // url: `${uino.sceneUrl}public/thingjs/scene/jail`,
    // 模型库 url
    // loaderResourceUrl: `${uino.modelsUrl}public/thingjs/models/jail`,
    // 天空盒
    // skyBox: './images/blueSky',
    // 加载模型库的时候是否加载最高级别的，依照场景文件版本号加载
    enableUseHighestVersionResource: false
});
uino.app = app;
uino.app.on(uino.constant.thingjs.eventType.Load, ev => {
    console.log('加载场景事件ev:', ev);
    uino.app.level.change(ev.campus);
});
