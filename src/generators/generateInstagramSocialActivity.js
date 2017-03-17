import _ from 'lodash';

export default function instagramTransformer (message) {
  const PostMedia = [];
  if (message.images && message.images.standard_resolution) {
    PostMedia.push({
      MediaType: _.get(message, 'type') || 'image',
      URL: message.images.standard_resolution.url,
    });
  }
  const socialActivity = {

    ActivityURL: _.get(message, 'link'),
    AuthorID: _.get(message, 'user.id'),
    AuthorPictureURL: _.get(message, 'user.profile_picture'),
    AuthorRealName: _.get(message, 'user.full_name'),
    AuthorUsername: _.get(message, 'user.username'),
    BodyText: _.get(message, 'caption.text'),
    ID: message.id,
    Network: 'instagram',
    PostMedia,
    Version: '2.0',
  };
  if (socialActivity.ID && socialActivity.BodyText) {
    return socialActivity;
  }
  return undefined;
}
