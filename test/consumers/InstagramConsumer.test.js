import InstagramConsumer from '../../src/consumers/InstagramConsumer';
import InstagramFixture from '../fixtures/instagram.json';

describe('InstagramConsumer', () => {
  it('should assertQueue with durable', () => {
    const assertQueueMock = jest.fn();
    new InstagramConsumer({
      assertQueue: assertQueueMock,
    }, 'hello', 'goodbye');
    expect(assertQueueMock).toBeCalled();
    const firstCall = assertQueueMock.mock.calls[0];
    expect(assertQueueMock).toBeCalledWith('hello', { durable: true });

    const secondCall = assertQueueMock.mock.calls[2];
    expect(assertQueueMock).toBeCalledWith('goodbye', { durable: true });
  });

  
  it('should run consume with consumerQueue name on start', () => {
    const consumeMock = jest.fn();
    const consumer = new InstagramConsumer({
      assertQueue: () => {},
      consume: consumeMock,
    }, 'hello');

    consumer.start();
    expect(consumeMock).toBeCalled();
    expect(consumeMock).toBeCalledWith('hello', consumer.onMessage);
  });

  it('should run transform and not publish on failure', () => {
    const sendToQueueMock = jest.fn();
    const ackMock = jest.fn();
    const consumer = new InstagramConsumer({
      assertQueue: () => {},
      sendToQueue: sendToQueueMock,
      ack: ackMock,
    }, 'hello');

    consumer.onMessage("{}");
    expect(sendToQueueMock.mock.calls.length).toBe(0);
    expect(ackMock.mock.calls.length).toBe(0);
  });

  it('should run transform and publish on success', () => {
    const sendToQueueMock = jest.fn();
    const ackMock = jest.fn();
    const consumer = new InstagramConsumer({
      assertQueue: () => {},
      sendToQueue: sendToQueueMock,
      ack: ackMock,
    }, 'hello');
    const rawJSON = JSON.stringify(InstagramFixture);
    consumer.onMessage(rawJSON);
    expect(sendToQueueMock).toBeCalled();
    expect(ackMock).toBeCalledWith(rawJSON);
  });
});
