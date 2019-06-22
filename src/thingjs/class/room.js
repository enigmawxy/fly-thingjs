class Room extends THING.Room {
    changOutLineColor() {
        this.style.color = '#00ff00';
    }
}
THING.factory.registerClass('Room', Room);
