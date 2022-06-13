import ArrayUtils from "yayaluoya-tool/dist/ArrayUtils";
import { ObjectUtils } from "yayaluoya-tool/dist/ObjectUtils"

/**
 * 数组工具
 */
export class ArrayT extends ArrayUtils {
    /**
     * 填充指定数量的数据
     * @param {*} d 
     * @param {*} length 
     */
    static fill(d, length) {
        return Array.from({
            length,
        }).fill(ObjectUtils.clone_(d));
    }
}