import generateMessage from './generateMessage';

const expect = require('expect');

describe('test generateMessage functionality', () => {
  it('returns a message object when passed a name and text arguments', () => {
    const text = 'do you know how to use mocha?';
    const from = 'myckie';
    const message = generateMessage(from, text);

    expect(message.from).toEqual(from);
    expect(message.text).toEqual(text);
    expect(message).toHaveProperty('createdAt');
  });
});
