import {
  Pagination as CnPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export const Pagination = (props: { pageCount: number }) => {
  return (
    <CnPagination className="h-full">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {[...Array(props.pageCount)].map((i) => (
          <PaginationItem key={i}>
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
