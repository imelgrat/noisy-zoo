const Animal = require('../animals/animal');
const Lion = require('../animals/lion');
const Tiger = require('../animals/tiger');

require('chai').should();

// Run tests on Animal class  
describe('Test Animal', function () {
    it('Should handle empty message and default sound', function () {
        const test = new Animal();
        const message = test.speak('');
        message.should.be.equal('');
    });

    it('Should handle message with single word and default sound', function () {
        const test = new Animal();
        const message = test.speak('Test');
        message.should.be.equal('Test');
    });

    it('Should handle message with multiple words and no other delimiters and default sound', function () {
        const test = new Animal();
        const message = test.speak('Test message');
        message.should.be.equal('Test message');
    });

    it('Should handle message with multiple words and other delimiters and default sound', function () {
        const test = new Animal();
        const message = test.speak('Test message, to test (inside parenthesis). Testing now.');
        message.should.be.equal('Test message, to test (inside parenthesis). Testing now.');
    });

    it('Should handle empty message and custom sound', function () {
        const test = new Animal('psss');
        const message = test.speak('');
        message.should.be.equal('');
    });

    it('Should handle message with single word and custom sound', function () {
        const test = new Animal('psss');
        const message = test.speak('Test');
        message.should.be.equal('Test psss');
    });

    it('Should handle message with multiple words and no other delimiters and custom sound', function () {
        const test = new Animal('psss');
        const message = test.speak('Test message');
        message.should.be.equal('Test psss message psss');
    });

    it('Should handle message with multiple words and other delimiters and custom sound', function () {
        const test = new Animal('psss');
        const message = test.speak('Test message, to test (inside parenthesis). Testing now.');
        message.should.be.equal('Test psss message psss, to psss test psss (inside psss parenthesis psss). Testing psss now psss.');
    });

    it('Should handle message with multiple words, nested delimiters and custom sound', function () {
        const test = new Animal('psss');
        const message = test.speak('Test message, to test (inside [parenthesis]). Testing now.');
        message.should.be.equal('Test psss message psss, to psss test psss (inside psss [parenthesis psss]). Testing psss now psss.');
    });
});

// Run tests on Lion class  
describe('Test Lion', function () {
    it('Should handle empty message and default sound', function () {
        const test = new Lion();
        const message = test.speak('');
        message.should.be.equal('');
    });

    it('Should handle message with single word and default sound', function () {
        const test = new Lion();
        const message = test.speak('Test');
        message.should.be.equal('Test roar');
    });

    it('Should handle message with multiple words and no other delimiters and default sound', function () {
        const test = new Lion();
        const message = test.speak('Test message');
        message.should.be.equal('Test roar message roar');
    });

    it('Should handle message with multiple words and other delimiters and default sound', function () {
        const test = new Lion();
        const message = test.speak('Test message, to test (inside parenthesis). Testing now.');
        message.should.be.equal('Test roar message roar, to roar test roar (inside roar parenthesis roar). Testing roar now roar.');
    });

    it('Should handle empty message and custom sound', function () {
        const test = new Lion('rrrrr');
        const message = test.speak('');
        message.should.be.equal('');
    });

    it('Should handle message with single word and custom sound', function () {
        const test = new Lion('rrrrr');
        const message = test.speak('Test');
        message.should.be.equal('Test rrrrr');
    });

    it('Should handle message with multiple words and no other delimiters and custom sound', function () {
        const test = new Lion('rrrrr');
        const message = test.speak('Test message');
        message.should.be.equal('Test rrrrr message rrrrr');
    });

    it('Should handle message with multiple words and other delimiters and custom sound', function () {
        const test = new Lion('rrrrr');
        const message = test.speak('Test message, to test (inside parenthesis). Testing now.');
        message.should.be.equal('Test rrrrr message rrrrr, to rrrrr test rrrrr (inside rrrrr parenthesis rrrrr). Testing rrrrr now rrrrr.');
    });

    it('Should handle message with multiple words, nested delimiters and custom sound', function () {
        const test = new Lion('rrrrr');
        const message = test.speak('Test message, to test (inside [parenthesis]). Testing now.');
        message.should.be.equal('Test rrrrr message rrrrr, to rrrrr test rrrrr (inside rrrrr [parenthesis rrrrr]). Testing rrrrr now rrrrr.');
    });
});
// Run tests on Tiger class  
describe('Test Tiger', function () {
    it('Should handle empty message and default sound', function () {
        const test = new Tiger();
        const message = test.speak('');
        message.should.be.equal('');
    });

    it('Should handle message with single word and default sound', function () {
        const test = new Tiger();
        const message = test.speak('Test');
        message.should.be.equal('Test grrr');
    });

    it('Should handle message with multiple words and no other delimiters and default sound', function () {
        const test = new Tiger();
        const message = test.speak('Test message');
        message.should.be.equal('Test grrr message grrr');
    });

    it('Should handle message with multiple words and other delimiters and default sound', function () {
        const test = new Tiger();
        const message = test.speak('Test message, to test (inside parenthesis). Testing now.');
        message.should.be.equal('Test grrr message grrr, to grrr test grrr (inside grrr parenthesis grrr). Testing grrr now grrr.');
    });

    it('Should handle empty message and custom sound', function () {
        const test = new Tiger('ggggg');
        const message = test.speak('');
        message.should.be.equal('');
    });

    it('Should handle message with single word and custom sound', function () {
        const test = new Tiger('ggggg');
        const message = test.speak('Test');
        message.should.be.equal('Test ggggg');
    });

    it('Should handle message with multiple words and no other delimiters and custom sound', function () {
        const test = new Tiger('ggggg');
        const message = test.speak('Test message');
        message.should.be.equal('Test ggggg message ggggg');
    });

    it('Should handle message with multiple words and other delimiters and custom sound', function () {
        const test = new Tiger('ggggg');
        const message = test.speak('Test message, to test (inside parenthesis). Testing now.');
        message.should.be.equal('Test ggggg message ggggg, to ggggg test ggggg (inside ggggg parenthesis ggggg). Testing ggggg now ggggg.');
    });

    it('Should handle message with multiple words, nested delimiters and custom sound', function () {
        const test = new Tiger('ggggg');
        const message = test.speak('Test message, to test (inside [parenthesis]). Testing now.');
        message.should.be.equal('Test ggggg message ggggg, to ggggg test ggggg (inside ggggg [parenthesis ggggg]). Testing ggggg now ggggg.');
    });
});