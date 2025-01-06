import { RecipeCard } from '@/components/card';
import { Pagination } from '@/components/pagination';
import { Recipe } from '@/types/recipe';

type RecipeListProps = {
  recipes: Recipe[] | undefined;
};
export const RecipeList = (props: RecipeListProps) => {
  const { recipes } = props;

  function getPageCount() {
    return 2;
  }
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {recipes ? (
        <>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {recipes.map(({ recipe_id, name, author }) => {
              return (
                <div className="aspect-video rounded-xl border bg-muted/50" key={recipe_id}>
                  <RecipeCard title={name} author={author} recipeId={recipe_id} />
                </div>
              );
            })}
          </div>
          {recipes.length > 9 ? <Pagination pageCount={getPageCount()} /> : null}
        </>
      ) : (
        <div className="flex h-full items-center justify-center">No Recipes to display</div>
      )}
    </div>
  );
};
