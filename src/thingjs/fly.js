// 获取特定小车
const getCar = function _getCar(name = 'car01') {
    if (uino.car) {
        return uino.car;
    }
    uino.car = uino.app.query(name)[0];
    return uino.car;
};
// 监听场景加载完成
uino.app.on('load', ev => {
    const car = getCar();
    // 改变小车颜色
    car.style.color = 'red';
    // 显示包围盒
    car.style.boundingBox = true;
    // 设置包围盒颜色
    car.style.boundingBoxColor = 'rgb(255,0,0)';
});
// 信息面板
const panel = new THING.widget.Panel({
    titleText: '摄影机属性',
    hasTitle: true,
    position: [200, 5],
    width: 230
});
const camera = uino.app.camera;
const panelData = {
    distance: camera.distance,
    position: camera.position,
    target: camera.target,
    xAngle: camera.cameraObject.angleX,
    yAngle: camera.cameraObject.angleY,
    zAngle: camera.cameraObject.angleZ
};
panel.addString(panelData, 'distance').caption('摄影机距离物体距离');
panel.addString(panelData, 'position').caption('摄影机世界坐标');
panel.addString(panelData, 'xAngle').caption('xAngle');
panel.addString(panelData, 'yAngle').caption('yAngle');
panel.addString(panelData, 'zAngle').caption('zAngle');
const updatePanelData = function _updatePanelData(camera) {
    panelData.distance = camera.distance;
    panelData.position = camera.position;
    panelData.target = camera.target;
    panelData.xAngle = camera.cameraObject.angleX;
    panelData.yAngle = camera.cameraObject.angleY;
    panelData.zAngle = camera.cameraObject.angleZ;
};
// 小车自身坐标系，x 每次点击改变
// 小车自身坐标系，y 每次点击改变
// 小车自身坐标系，z 每次点击改变
const [objSelfX, objSelfY, objSelfZ] = [1, 1, 1];
// 绕小车 x 轴，每次旋转
// 绕小车 y 轴，每次旋转
// 绕小车 z 轴，每次旋转
const [xRotate, yRotate] = [10, 10];
// 摄影机位置 基于世界坐标系
const cameraPosition = app.camera.tempComplete;
// 相对于红色小车自身坐标系的偏移
let [x, y, z] = [0, 0, 0];
// 旋转角度的偏移量
let [xAngle, yAngle, zAngle] = [0, 0, 0];
// 摄影机基于小车自身坐标系 x 轴移动
const addCameraPositionX = function _changeCameraPositionX() {
    x = x + objSelfX;
    updateCameraPosition();
};
// 摄影机基于小车自身坐标系 x 轴移动
const reduceCameraPositionX = function _changeCameraPositionX() {
    x = x - objSelfX;

    updateCameraPosition();
};
// 摄影机基于小车自身坐标系 y 轴移动
const addCameraPositionY = function _changeCameraPositionY() {
    y = y + objSelfY;
    updateCameraPosition();
};
// 摄影机基于小车自身坐标系 y 轴移动
const reduceCameraPositionY = function _changeCameraPositionY() {
    y = y - objSelfY;
    updateCameraPosition();
};
// 摄影机基于小车自身坐标系 z 轴移动
const addCameraPositionZ = function _changeCameraPositionZ() {
    z = z + objSelfZ;
    updateCameraPosition();
};
// 摄影机基于小车自身坐标系 z 轴移动
const reduceCameraPositionZ = function _changeCameraPositionZ() {
    z = z - objSelfZ;
    updateCameraPosition();
};
// 更新摄影机飞向
const updateCameraPosition = function _updateCameraPosition({
    targetObj = getCar(),
    xAngle = 0,
    yAngle = 0,
    radiusFactor = 1.5,
    radius
} = {}) {
    let obj = null;
    if (arguments.length > 0) {
        obj = { target: targetObj, xAngle, yAngle, radiusFactor };
    } else {
        const nowPosition = targetObj.selfToWorld([x, y, z]);
        obj = {
            // 飞行时间
            time: 1000,
            // 摄影机位置
            position: nowPosition,
            // 小车位置
            target: targetObj.position
        };
    }
    obj.complete = function _complete(ev) {
        // 更新面板数据
        updatePanelData(uino.app.camera);
    };
    uino.app.camera.flyTo(obj);
};
// 预先找好的复原视角位置
const reset = function _reset() {
    const car = getCar();
    const position = [23.416928429425614, 10.920238566451447, 19.87585306710976];
    uino.app.camera.flyTo({
        time: 1000,
        // 摄影机位置
        position: position,
        // 小车位置
        target: car.position,
        complete() {
            updatePanelData(uino.app.camera);
        }
    });
};
// 摄影机绕 x 轴旋转
const addRotateCameraPositionX = function _addRotateCameraPositionX() {
    // uino.app.camera.rotateX(xAngle);
    xAngle = xAngle + xRotate;
    updateCameraPosition({ xAngle, yAngle });
}; // 摄影机绕 x 轴旋转
const reduceRotateCameraPositionX = function _reduceRotateCameraPositionX() {
    // uino.app.camera.rotateX(-xAngle);
    xAngle = xAngle - xRotate;
    updateCameraPosition({ xAngle, yAngle });
};
// 摄影机绕 y 轴旋转
const addRotateCameraPositionY = function addRotateCameraPositionY() {
    // uino.app.camera.rotateY(yAngle);
    yAngle = yAngle + yRotate;
    updateCameraPosition({ xAngle, yAngle });
};
// 摄影机绕 y 轴旋转
const reduceRotateCameraPositionY = function _reduceRotateCameraPositionY() {
    // uino.app.camera.rotateY(-yAngle);
    yAngle = yAngle - yRotate;
    updateCameraPosition({ xAngle, yAngle });
};

new THING.widget.Button(`复位`, reset);
new THING.widget.Button(`红车自身 x 轴 + ${objSelfX}`, addCameraPositionX);
new THING.widget.Button(`红车自身 x 轴 - ${objSelfX}`, reduceCameraPositionX);
new THING.widget.Button(`红车自身 y 轴 + ${objSelfX}`, addCameraPositionY);
new THING.widget.Button(`红车自身 y 轴 - ${objSelfX}`, reduceCameraPositionY);
new THING.widget.Button(`红车自身 z 轴 + ${objSelfX}`, addCameraPositionZ);
new THING.widget.Button(`红车自身 z 轴 - ${objSelfX}`, reduceCameraPositionZ);
new THING.widget.Button(`红车 x 轴旋转 + ${xRotate}`, addRotateCameraPositionX);
new THING.widget.Button(`红车 x 轴旋转 - ${xRotate}`, reduceRotateCameraPositionX);
new THING.widget.Button(`红车 y 轴旋转 + ${yRotate}`, addRotateCameraPositionY);
new THING.widget.Button(`红车 y 轴旋转 - ${yRotate}`, reduceRotateCameraPositionY);
