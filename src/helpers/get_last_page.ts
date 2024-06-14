export function getLastPage (totalCount: number, pageSize: number) {
    return Math.ceil(totalCount / pageSize)
}