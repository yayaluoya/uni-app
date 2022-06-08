import { BaseDataProxy } from "yayaluoya-tool/dist/uni/localData/BaseDataProxy";
/**
 * 用户数据
 */
export class UserDataProxy extends BaseDataProxy {
    /** 单例 */
    static instance = new UserDataProxy();

    /** 设置用户数据 */
    setData(data) {
        this.data = data;
    }

    /** 清空用户数据 */
    clearData() {
        this.data = {};
    }

    getNewData() {
        return {};
    }
}