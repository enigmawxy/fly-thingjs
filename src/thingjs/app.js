// 创建一个地球
uino.app = new THING.App({
    // 指定 3d 容器 div标签 的id属性值
    container: 'div3d',
    // 场景 url
    url: `${uino.sceneUrl}public/thingjs/scene/jail`,
    // 模型库 url
    loaderResourceUrl: `${uino.modelsUrl}public/thingjs/models/jail`,
    // 天空盒
    // skyBox: './images/blueSky',
    // 加载模型库的时候是否加载最高级别的，依照场景文件版本号加载
    enableUseHighestVersionResource: false
});
