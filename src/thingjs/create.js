uino.thingjsUtil.createWidgetButton('测试创建摄像头', ev => {
    const videoPro = {
        id: THING.Utils.generateUUID(),
        name: '测试创建摄像头',
        type: 'Video',
        url: 'https://model.3dmomoda.com/models/335472acb6bb468ead21d1a8d9a2d24e/1/gltf',
        position: [-5, 0, 7],
        scale: [50, 50, 50],
        complete(ev) {
            console.log('创建物体：', ev.object);
        }
    };
    const video = VideoFactory.createVideo(videoPro);
    console.log('创建的对象：', video);
});
