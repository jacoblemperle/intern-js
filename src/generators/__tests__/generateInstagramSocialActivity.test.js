import InstagramFixture from './fixtures/instagram.json';
import generateInstagramSocialActivity from '../generateInstagramSocialActivity';

describe('generateInstagramSocialActivity', () => {
  it('should generate an activity with json', () => {
    const activity = generateInstagramSocialActivity(InstagramFixture);
    expect(activity.ActivityURL).toEqual('https://www.instagram.com/p/BGKKqSeoadh/');
    expect(activity.AuthorID).toEqual('743467152');
    expect(activity.AuthorPictureURL).toEqual('https://scontent.cdninstagram.com/t51.2885-19/12940036_1025946850808759_670550570_a.jpg');
    expect(activity.AuthorRealName).toEqual("Sarah Flynt 👑");
    expect(activity.AuthorUsername).toEqual('himynameis_sarah');
    expect(activity.Network).toEqual('instagram');
    expect(activity.PostMedia[0].MediaType).toEqual('image');
    expect(activity.PostMedia[0].URL).toEqual('https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13381140_104166473340754_1698310139_n.jpg?ig_cache_key=MTI2Mzg2OTUzMTk1NTI0Mjg0OQ%3D%3D.2.l');
    expect(activity.ID).toEqual('1263869531955242849_743467152');
    expect(activity.BodyText).toEqual("You make me so happy ♥\n#quote #edit #instapic #instagood #picoftheday #love #loml #doubletap #followforfollow #followback #happy #boyfriend #smile @someuser");
  });

  it('should returned undefined if missing id and body text', () => {
    const activity = generateInstagramSocialActivity({});
    expect(activity).toEqual(undefined);
  });

  it('should match snapshot on valid activity', () => {
    const activity = generateInstagramSocialActivity(InstagramFixture);
    expect(activity).toMatchSnapshot();
  });
});
