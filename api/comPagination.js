/**
 * 获取公共分页
 */
export function comPagination(number = 10, numbers = []) {
    let pagination = {
        total: 0,
        currentPage: 1,
        pageSize: number,
        pageSizes: numbers,
    };
    return pagination;
}