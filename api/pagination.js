/**
 * 分页对象
 */
export class Pagination {
    total = 0;
    currentPage = 1;
    pageSize = 0;

    constructor(number = 10) {
        this.pageSize = number;

        /** 是否是最后一页 */
        Object.defineProperty(this, 'lastPage', {
            enumerable: false,
            get: () => {
                return this.pageSize * this.currentPage >= this.total;
            },
        });
    }
};