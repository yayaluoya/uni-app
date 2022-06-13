import { ArrayT } from "./ArrayT";

/**
 * loading工具
 */
export class LoadingT {
    /** 私有属性 加载列表 */
    loadingList = [];

    /**
     * 清空
     */
    clean() {
        this.loadingList.length = 0;
    }

    /** 是否loading */
    get loading() {
        return this.loadingList.length > 0;
    }

    /**
     * 设置loading
     * @param {*} state 状态
     * @param {*} key key
     */
    set(state, ...key) {
        if (state) {
            this.loadingList.push(key);
        } else {
            ArrayT.eliminate(this.loadingList, _ => ArrayT.same(_, key));
        }
    }

    /**
     * 获取是否loading
     * @param  {...any} key 
     */
    get(...key) {
        return this.loadingList.some(_ => ArrayT.same(_, key));
    }
}