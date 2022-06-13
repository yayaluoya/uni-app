/**
 * 分页对象
 */
export class Pagination {
    total = 0;
    currentPage = 1;
    pageSize = 0;

    constructor(number = 10) {
        this.pageSize = number;
    }
};