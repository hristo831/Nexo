import { cypressRequest } from '../baseCypressRequest';
import { CreateUserRequestDto } from '../models/accountModels';

const partialUserUrl = '/Account/v1/User';

export function createUser(body: CreateUserRequestDto){
  return cypressRequest('POST', partialUserUrl, { body });
}

