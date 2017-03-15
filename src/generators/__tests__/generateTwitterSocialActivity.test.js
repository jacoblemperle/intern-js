import TwitterFixture from './fixtures/twitter.json';
import TwitterTwoFixture from './fixtures/twitterTwo.json';
import generateTwitterSocialActivity from '../generateTwitterSocialActivity';

describe('generateTwitterSocialActivity', () => {
  it('should generate an activity with fixure json', () => {
    const activity = generateInstagramSocialActivity(TwitterFixture);
    expect(activity.ActivityURL).toEqual('http://twitter.com/MckeonLutz/statuses/751152691611463680');
    expect(activity.AuthorID).toEqual('id:twitter.com:1386906962');
    expect(activity.AuthorPictureURL).toEqual('https://abs.twimg.com/sticky/default_profile_images/default_profile_0_normal.png"');
    expect(activity.AuthorRealName).toEqual('MckeonLutz');
    expect(activity.AuthorUsername).toEqual('MckeonLutz');
    expect(activity.Network).toEqual('twitter');
    expect(activity.ID).toEqual('tag:search.twitter.com,2005:751152691611463680');
    expect(activity.BodyText).toEqual('RT @StylishRentals: Love this! \"Modern style Country Villa - Houses for Rent in Almoster\" @airbnb #Travelhttps://t.co/xJ479oYcx9');
  });

  it('should generate an activity with second fixure json', () => {
    const activity = generateInstagramSocialActivity(TwitterTwoFixture);
    expect(activity.ActivityURL).toEqual('http://twitter.com/JenVento/statuses/794169597222064128');
    expect(activity.AuthorID).toEqual('id:twitter.com:18141787');
    expect(activity.AuthorPictureURL).toEqual('https://pbs.twimg.com/profile_images/378800000578979749/4ea77b8e30565b5bf1222b9042ae4e5f_normal.jpeg');
    expect(activity.AuthorRealName).toEqual('Jennifer Vento');
    expect(activity.AuthorUsername).toEqual('JenVento');
    expect(activity.Network).toEqual('twitter');
    expect(activity.ID).toEqual('tag:search.twitter.com,2005:794169597222064128');
    expect(activity.BodyText).toEqual('RT @StylishRentals: Love this! \"Modern style Country Villa - Houses for Rent in Almoster\" @airbnb #Travelhttps://t.co/xJ479oYcx9');
  });
});
