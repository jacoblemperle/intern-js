import generateInstagramSocialActivity from '../generators/generateInstagramSocialActivity';

export default class InstagramConsumer {
  constructor (channel, queue) {
    this.channel = channel;
    this.queue = queue;
    this.setup();
  }

  setup () {
    this.channel.assertQueue(this.queue, { durable: true });
  }

  onMessage (message) {
    const parsedMessage = JSON.parse(message);
    const socialActivity = generateInstagramSocialActivity(parsedMessage);
    if (socialActivity) {
      this.publishSocialActivity(socialActivity);
      this.channel.ack(message);
    }
  }

  publishSocialActivity (socialActivity) {
    const socialJson = JSON.stringify(socialActivity);
    this.channel.sendToQueue(this.queue, new Buffer(socialJson));
  }
}
