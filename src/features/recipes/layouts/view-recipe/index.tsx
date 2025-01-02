import grain from '@/assets/grain.avif';
import hop from '@/assets/hop.avif';
import yeast from '@/assets/yeast.avif';
import { AccordionContent } from '@/components/accordion/accordion-content';
import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Recipe } from '@/types/recipe';

type ViewRecipeProps = {
  recipe: Recipe | undefined;
};

export const ViewRecipe = ({ recipe }: ViewRecipeProps) => {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="w-4/5 ">
        <Accordion
          type="multiple"
          defaultValue={['fermentables', 'hops', 'yeast', 'adjuncts']}
          className="w-full"
        >
          <AccordionItem value="fermentables">
            <AccordionTrigger>Fermentables</AccordionTrigger>
            {recipe?.fermentables ? (
              recipe.fermentables.map(({ name, weight, ebc_max, grist_ratio, recipe_id }) => {
                return (
                  <AccordionContent
                    title={name}
                    weight={weight}
                    key={recipe_id}
                    ebc={ebc_max}
                    ratio={grist_ratio}
                    img={grain}
                  />
                );
              })
            ) : (
              <p>No Fermentables Yet</p>
            )}
          </AccordionItem>
          <AccordionItem value="hops">
            <AccordionTrigger defaultChecked>Hops</AccordionTrigger>
            {recipe?.hops ? (
              recipe.hops.map(({ name, weight, recipe_id }) => {
                return (
                  <AccordionContent
                    title={name}
                    weight={weight}
                    key={recipe_id}
                    ebc={weight}
                    ratio={weight}
                    img={hop}
                  />
                );
              })
            ) : (
              <p>No Hops Yet</p>
            )}
          </AccordionItem>
          <AccordionItem value="yeast">
            <AccordionTrigger>Yeast</AccordionTrigger>
            {recipe?.yeasts ? (
              recipe.yeasts.map(({ name, weight, recipe_id }) => {
                return (
                  <AccordionContent
                    title={name}
                    weight={weight}
                    key={recipe_id}
                    ebc={weight}
                    ratio={weight}
                    img={yeast}
                  />
                );
              })
            ) : (
              <p>No Yeast Yet</p>
            )}
          </AccordionItem>
          <AccordionItem value="adjuncts">
            <AccordionTrigger>Additions</AccordionTrigger>
            {recipe?.additives ? (
              recipe.additives.map(({ name, weight, recipe_id }) => {
                return (
                  <AccordionContent
                    title={name}
                    key={recipe_id}
                    weight={weight}
                    ebc={weight}
                    ratio={weight}
                    img={hop}
                  />
                );
              })
            ) : (
              <p>No Additions Yet</p>
            )}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
