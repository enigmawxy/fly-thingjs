class AlarmManage {
    static globalTriggerAlarm(eventData, tag) {
        AlarmManage.app.trigger(AlarmManage.eventType, eventData, tag);
    }
    static objTriggerAlarm(obj, eventData, tag) {
        if (obj) {
            obj.trigger(AlarmManage.eventType, eventData, tag);
            return;
        }
        throw new Error('obj 不能为空');
    }
}
AlarmManage.app = uino.app;
AlarmManage.eventType = 'alarm';
