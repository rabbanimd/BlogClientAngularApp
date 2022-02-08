import { Blog } from "./blog";

export interface PageResponse{
    content ?: Blog[];
    pageNo ?: number;
    pageSize ?: number;
    totalElement ?: number;
    totalPages ?: number;
    last ?: boolean;
}