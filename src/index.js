import connect from './connect';
import InstagramConsumer from './transformers/InstagramConsumer';


connect().then((channel) => {
  const instagramConsumer = new InstagramConsumer(channel, 'instagram_social_activity');
  channel.consume(queue, instagramConsumer.onMessage);
});
