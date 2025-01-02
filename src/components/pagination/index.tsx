import {
  Pagination as CnPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export const Pagination = (pageCount: number) => {
  return (
    <CnPagination className="h-full">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {[...Array(pageCount)].map((i, e) => (
          <PaginationItem key={e + pageCount}>
            <PaginationLink href="#">{i + 1}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </CnPagination>
  );
};
