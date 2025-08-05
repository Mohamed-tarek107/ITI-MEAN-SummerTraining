const EventEmitter = require('events');
const uuid = require('uuid')

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', { id: uuid.v4(), msg });
    }
}

module.exports = Logger


// //crate class it inhearte the eventemitter methods in a class of ours
// class MyEmitter extends EventEmitter {}
// //creates instance
// const myEmitter = new MyEmitter();

// //event listener //run when emit
// myEmitter.on('event', () => console.log(`event fired`));


// myEmitter.emit('event')
// myEmitter.emit('event')
// myEmitter.emit('event')
// myEmitter.emit('event')
