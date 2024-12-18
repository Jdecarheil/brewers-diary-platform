import { RecipeCard } from '@/components/card';
import { Pagination } from '@/components/pagination';

export const PrivateRecipe = () => {
  const data = [
    { index: 1, title: 'dsfd', author: 'dfwefe' },
    { index: 2, title: 'dsfd', author: 'dfwefe' },
    { index: 3, title: 'dsfd', author: 'dfwefe' },
    { index: 4, title: 'dsfd', author: 'dfwefe' },
    { index: 5, title: 'dsfd', author: 'dfwefe' },
    { index: 6, title: 'dsfd', author: 'dfwefe' },
    { index: 7, title: 'dsfd', author: 'dfwefe' },
    { index: 8, title: 'dsfd', author: 'dfwefe' },
    { index: 9, title: 'dsfd', author: 'dfwefe' },
  ];

  const count = 2;
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {data.map((value) => {
          return (
            <div className="aspect-video rounded-xl border bg-muted/50" key={value.index}>
              <RecipeCard title={value.title} author={value.author} />
            </div>
          );
        })}
      </div>

      <Pagination pageCount={count} />
    </div>
  );
};
