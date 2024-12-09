import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const Recipes = () => {
	return (
		<Table>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">INV001</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>Credit Card</TableCell>
					<TableCell className="text-right">$250.00</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};

// export const loadRecipes = (queryClient: QueryClient) => {
//   async ({ request }: LoaderFunctionArgs) => {
//     return 'fff';
//   };
// };

// export const discussionsLoader =
//   (queryClient: QueryClient) =>
//   async ({ request }: LoaderFunctionArgs) => {
//     const url = new URL(request.url);

//     const page = Number(url.searchParams.get('page') || 1);

//     const query = getDiscussionsQueryOptions({ page });

//     return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
//   };
