import { BaseApiCon } from './BaseApiCon'

export class TestAC extends BaseApiCon {
    /** 单例 */
    static instance = new TestAC();

    /** 测试接口 */
    test(data) {
        return this.postData({
            url: '/test',
            data,
        });
    }
}