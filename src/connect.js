import amqp from 'amqplib/callback_api';

function createChannel (connection) {
  return new Promise((resolve, reject) => {
    connection.createChannel((error, channel) => {
      if (error) {
        reject(error);
      } else {
        resolve(channel);
      }
    });
  });
};

export function connect (url) {
  return new Promise((resolve, reject) => {
    amqp.connect(url || 'amqp://localhost', (error, connection) => {
      if (error) {
        reject(error);
      } else {
        resolve(connection);
      }
    })
  }).then(createChannel);
}
