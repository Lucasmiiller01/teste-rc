import Realm from 'realm';

import UserSchema from '../schemas/UserSchema';
import ChannelFavoriteSchema from '../schemas/ChannelFavoriteSchema';

export const getRealm = async () => {
  const realm = await Realm.open({ schema: [UserSchema, ChannelFavoriteSchema], schemaVersion: 1 });
  return realm;
}