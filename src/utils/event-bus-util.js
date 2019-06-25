/*
 * @Author: 张攀钦
 * @Date: 2019-06-14 09:50:34
 * @Last Modified by: 张攀钦
 * @Last Modified time: 2019-06-26 06:59:43
 * @description: 封装异步事件通知
 */

var uino = uino || {};
const vue = new Vue();
const eventBus = {};
uino.eventBus = eventBus;
// 监听事件
eventBus.on = function _onEvent(eventType, callback) {
    vue.$on(eventType, callback);
};
// 发送事件
eventBus.emit = function _onEvent(eventType, data) {
    vue.$emit(eventType, data);
};
