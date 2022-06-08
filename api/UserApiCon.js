import { BaseApiCon } from './BaseApiCon'

export class UserApiCon extends BaseApiCon {
  /** 单例 */
  static instance = new UserApiCon();
}