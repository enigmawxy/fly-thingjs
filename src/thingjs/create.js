const createVideo = function _createVideo() {
    const name = '测试创建摄像头';
    let video = uino.app.query(name)[0];
    if (video) {
        return video;
    }
    const videoPro = {
        id: THING.Utils.generateUUID(),
        name: name,
        type: 'Video',
        url: 'https://model.3dmomoda.com/models/335472acb6bb468ead21d1a8d9a2d24e/1/gltf',
        position: [-5, 0, 7],
        scale: [50, 50, 50]
    };
    video = VideoFactory.createVideo(videoPro);
    video.changOutLineColor();
};
uino.thingjsUtil.createWidgetButton('测试创建摄像头', ev => {
    createVideo();
});
