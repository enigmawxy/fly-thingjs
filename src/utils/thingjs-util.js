/**
 * @author: 张攀钦
 * @description: 操作thingjs的工具类
 */
var uino = uino || {};
const myMpp = uino.app;
uino.thingjsUtil = {};

uino.thingjsUtil.uuid = function _uuid() {
    return THING.Utils.generateUUID();
};
/**
 * @author: 张攀钦
 * @description: 创建物体
 * @param {Object} obj
 * @returns {THING.BaseObject}
 * @example
 * obj.id {String|Number} 物体 ID，可通过 THING.Utils.generateUUID() 生成唯一标识
 * obj.type{String} 物体类型,'Thing'
 * obj.name {String} 物体名称
 * obj.url {String} 物体资源 url 'public/model'
 * obj.position {Array.<Number>} 物体在世界坐标系下的位置[-5,0,0]
 * obj.parent {Object} 相对于父对象创建物体
 * obj.localPosition {Array.<Number>}相对于父类的坐标[-5,0,0]
 * obj.complete {Function}	物体加载完成后的回调函数
 */
uino.thingjsUtil.create = function _create(obj) {
    myMpp.create(obj);
};
/**
 * @author: 张攀钦
 * @description: 物体查询,//  query 查询的结果都是满足条件的对象集合（Selector）,可通过下标获取
 * @param {String|RegExp} str
 * @returns THING.Selector
 * @example
 * 
// 查询 id 为 001 的对象集合
app.query('#001');

// 查询名称为 car01 的对象集合
app.query('car01');

// 查询类型为 Thing 的对象集合
app.query('.Thing');

// 查询自定义属性 [prop=value] 的对象集合
app.query('["userData/power"=60]');

// 根据正则表达式匹配 name 中包含 'car' 的子物体
app.query(/car/);


// 如需访问单个对象，可通过下标获取，如
var obj=app.query('#001')[0];

// 也可通过循环遍历对象集合
var obj=app.query('.Thing');
obj.forEach(function(obj){
  console.log(obj.name)
})
 */
uino.thingjsUtil.query = function _query(str) {
    return myMpp.query(param);
};

/**
 * @author: 张攀钦
 * @description: 添加控件
 * @param {Object} control :control new THING.WalkControl();
 * @param {String} controlName :控件自定义名称（用于查找、获取）;
 * @returns {Object}
 */
uino.thingjsUtil.addControl = function _addControl(control, controlName) {
    myMpp.addControl(control, controlName);
};
/**
 * @author: 张攀钦
 * @description: 删除控件
 * @param {Object|String} ctrl 控件对象 或 控件自定义名称
 * @example uino.thingjsUtil.removeControl(ctrl); uino.thingjsUtil.removeControl('第一人称行走控件');
 */
uino.thingjsUtil.removeControl = function _removeControl(ctrl) {
    myMpp.removeControl(ctrl);
};
/**
 * @author: 张攀钦
 * @description: 根据名字获取控件
 * @param {String} controlName :控件自定义名称（用于查找、获取）;
 * @returns {Object}
 */
uino.thingjsUtil.getControl = function _getControl(controlName) {
    return myMpp.getControl(controlName);
};
/**
 * @author: 张攀钦
 * @description: 判断是否有某个控件
 * @param {String} controlName :控件自定义名称（用于查找、获取）;
 * @returns {Boolean}
 */
uino.thingjsUtil.hasControl = function _hasControl(controlName) {
    return myMpp.hasControl(controlName);
};
/**
 * @author: 张攀钦
 * @description: 绑定事件
 * on(eventType, condition?, userData?, callback, tag?, priority?)
eventType	String	
事件类型名称

condition?	String	
物体类型选择条件

userData?	Object	
事件传递自定义数据

callback	function	
事件触发的回调函数

tag?	String	
事件标签

priority?	Number	
优先级（默认值 50 ），数值越大优先级越高，越先响应
@example
// 绑定 Click 事件
uino.thingjsUtil.on('click',function(ev){
  console.log(ev.object.name);
})
// 给场景中所有 Thing 类型对象，绑定 Click 事件
uino.thingjsUtil.on('click','.Thing',function(ev){
  console.log(ev.object.name);
})
// 设置事件标签 tag
uino.thingjsUtil.on('click','.Thing',function(ev){
  console.log(ev.object.name);
},'我的点击事件01');
// 设置事件优先级
uino.thingjsUtil.on('click',function(ev){
  console.log(ev.object.name);
},'我的点击事件02',51)
// 填写 userData 传递参数
uino.thingjsUtil.on('click', { color: '#ff0000' }, function (ev) {
  var color = ev.data.color;
  console.log(color)
});
 */
uino.thingjsUtil.on = function _on(eventType, condition, userData, callback, tag, priority) {
    return myMpp.on(eventType, condition, userData, callback, tag, priority);
};
/**
 * @author: 张攀钦
 * @description: 解绑事件
eventType	String	
事件类型名称

condition	String	
物体类型选择条件

callback	function | String	
事件触发的回调函数 或 事件标签（tag）
@example
// 移除所有 Click 事件的绑定
app.off('click');
// 移除对场景中 Thing 类型物体的 Click 事件绑定
app.off('click','.Thing');
// 移除标记为某个事件标签的事件绑定,如果绑定（on）时没写条件，则第二个参数需填写 null
app.off('click','.Thing','我的点击事件01')
app.off('click',null,'我的点击事件02')
 */
uino.thingjsUtil.off = function _off(eventType, condition, tag) {
    return myMpp.off(eventType, condition, tag);
};
/**
 * @author: 张攀钦
 * @description:暂停事件响应
 * @param {String} eventType 事件名称
 * @param {String} condition 物体类型选择条件
 * @param {String} tag? 事件标签
 * @example
 * // 暂停系统内置的左键双击进入下一层级操作
 * // app.pauseEvent(THING.EventType.DBLClick, '*', THING.EventTag.LevelEnterOperation);
 * // 暂停系统内置的右键单击返回上一层级操作
 * // app.pauseEvent(THING.EventType.Click, '*', THING.EventTag.LevelBackOperation);
 * // 暂停进入物体层级默认操作行为
 * // app.pauseEvent(THING.EventType.EnterLevel, '.Thing', THING.EventTag.LevelSceneOperations);
 * // 暂停退出物体层级默认操作行为
 * // app.pauseEvent(THING.EventType.LeaveLevel, '.Thing', THING.EventTag.LevelSceneOperations);
 * // 暂停进入物体层级的默认飞行行为
 * // app.pauseEvent(THING.EventType.EnterLevel, '.Thing', THING.EventTag.LevelFly);
 * // 暂停进入物体层级的默认背景设置操作
 * // app.pauseEvent(THING.EventType.EnterLevel, '.Thing', THING.EventTag.LevelSetBackground);
 * // 暂停给物体绑定的 Click 事件操作
 * // app.pauseEvent('click','.Thing','我的点击事件01')
 */
uino.thingjsUtil.pauseEvent = function _pauseEvent(eventType, condition, tag) {
    return myMpp.pauseEvent(eventType, condition, tag);
};
/**
 * @author: 张攀钦
 * @description: 恢复事件响应
 * @param {String} eventType 事件名称
 * @param {String} condition 物体类型选择条件
 * @param {String} tag? 事件标签
 * @example
 * 
// 恢复系统内置的左键双击进入下一层级操作
app.resumeEvent(THING.EventType.DBLClick, '*', THING.EventTag.LevelEnterOperation);
// 恢复系统内置的右键单击返回上一层级操作
app.resumeEvent(THING.EventType.Click, '*', THING.EventTag.LevelBackOperation);
// 恢复进入物体层级默认操作行为
app.resumeEvent(THING.EventType.EnterLevel, '.Thing', THING.EventTag.LevelSceneOperations);
// 恢复退出物体层级默认操作行为
app.resumeEvent(THING.EventType.LeaveLevel, '.Thing', THING.EventTag.LevelSceneOperations);
// 恢复进入物体层级的默认飞行行为
app.resumeEvent(THING.EventType.EnterLevel, '.Thing', THING.EventTag.LevelFly);
// 恢复进入物体层级的默认背景设置操作
app.resumeEvent(THING.EventType.EnterLevel, '.Thing', THING.EventTag.LevelSetBackground);
// 恢复给物体绑定的 Click 事件操作
app.resumeEvent('click','.Thing','我的点击事件01')
 */
uino.thingjsUtil.resumeEvent = function _resumeEvent(eventType, condition, tag) {
    return myMpp.resumeEvent(eventType, condition, tag);
};
/**
 * @author: 张攀钦
 * @description:下载文件
 * @param {String} fileName 文件名字
 * @param {String} content 文件内容
 */
uino.thingjsUtil.saveFile = function _saveFile(fileName, content) {
    if (!content) {
        content = '';
    }
    if (typeof content === 'object') {
        content = JSON.stringify(content);
    }
    myMpp.saveFile(fileName, content);
};
/**
 * @author: 张攀钦
 * @description: 创建 Thingjs WidgetButton
 * @param {String} name ,按钮显示名称
 * @param {Function} callback ,按钮点击的回调函数
 */
uino.thingjsUtil.createWidgetButton = function(name, callback) {
    return new THING.widget.Button(name, callback);
};
