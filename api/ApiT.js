import { comPagination } from "./comPagination";
/**
 * api工具
 */
export class ApiT {
    /**
     * 获取分页查询数据
     */
    static getPageData(pagination = comPagination(), query = {}) {
        return {
            page_size: pagination.pageSize,
            page: pagination.currentPage,
            ...query,
        };
    }

    /**
     * 获取序号
     * @param {*} index 索引 从0开始的这个
     * @param {*} pagination 当前页面的分页信息
     */
    static getI(index, pagination = comPagination()) {
        return index + 1 + (pagination.currentPage - 1) * pagination.pageSize;
    }

    /**
     * 获取查询str对应的对象
     */
    static getQueryStr(type, str, op) {
        return {
            ...Object.values(op).reduce((a, b) => {
                a[b] = '';
                return a;
            }, {}),
            [op[type]]: str,
        }
    }

    /**
     * 路径拼接
     * @param {*} orgin 
     * @param {*} url 
     */
    static join(orgin, url) {
        return `${orgin.replace(/\/+$/, '')}/${url.replace(/^\/+/, '')}`;
    }

    /** 用文件根路径作为orgin来拼接 */
    static fileJoin(url) {
        let f = (url) => {
            //如果url带有源的话就算了
            if (/^(https?:)?\/\//.test(url)) {
                return url;
            }
            return ApiT.join('http://lawyersh.oss-cn-shanghai.aliyuncs.com/', url);
        }
        //如果是数组的话
        if (Array.isArray(url)) {
            return url.map(_ => f(_));
        }
        return f(url);
    }
}