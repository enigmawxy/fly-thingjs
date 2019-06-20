uino.thingjsUtil.createWidgetButton('查看Campus属性', () => {
    const campus = uino.app.query('.Campus')[0];
    // campus.buildings 园区下面的建筑
    console.log('园区下面建筑 campus.buildings ：', campus.buildings);
    // campus.things 园区下面的物体
    console.log('园区下面建筑 campus.things ：', campus.things);
    // 获取场景 json 数据
    console.log('园区所属场景 json 文件 campus.sceneJSONData ：', campus.sceneJSONData);
    // 园区中心点 campus.center
    console.log('园区中心点 campus.center ：', campus.center);
});
