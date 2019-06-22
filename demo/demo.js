class A {
    run() {
        console.log('A');
    }
}
class B extends A {
    run() {
        console.log('B');
    }
}
class C extends A {
    run() {
        console.log('C');
    }
}
class D extends B {
    run() {
        console.log('D');
    }
}
class E extends C {}
class F extends A {}
const client = function _client(a) {
    if (a instanceof A) {
        a.run();
        return;
    }
    throw new Error('传入变量类型有误');
};
const a = new A();
const d = new D();
const b = new B();
const c = new C();
const e = new E();
const f = new F();
console.log(a instanceof A); // true
console.log(d instanceof A); // true
console.log(d instanceof B); // true
console.log(c instanceof A); // true
console.log(b instanceof A); // true
console.log(e instanceof A); // true
console.log(e instanceof C); // true
console.log(f instanceof A); // true
client(a); // A
client(b); // B
client(c); // C
client(d); // D
client(e); // C
client(f); // A
