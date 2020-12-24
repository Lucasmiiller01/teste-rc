import Realm from 'realm';

import UserSchema from '../schemas/UserSchema';

export const getRealm = async () => {
  const realm = await Realm.open({ schema: [UserSchema], schemaVersion: 1 });
  return realm;
}