/**
 * @author: 张攀钦
 * @description: 楼层类
 */
class Floor extends THING.Floor {
    changOutLineColor() {
        this.style.color = '#00ff00';
    }
}
THING.factory.registerClass('Floor', Floor);
