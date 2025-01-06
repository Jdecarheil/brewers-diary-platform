import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';

type CardProps = {
  title: string;
  author: string;
  recipeId: number;
};

export const RecipeCard = ({ title, author, recipeId }: CardProps) => {
  const navigation = useNavigate();

  return (
    // <div className="h-full">
    //   <div className="h-2/5">
    //     <p>{title}</p>
    //   </div>
    //   <div className="h-2/5">
    //     <div className="grid auto-rows-min gap-4 md:grid-cols-2">
    //       <p>{title}</p>
    //
    //     </div>
    //   </div>
    //   <div className="h-1/5">
    //     <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
    //       <div className="grid auto-rows-min gap-4 md:grid-cols-5">
    //         <Badge title="ABV: " value="5.00%" />
    //         <Badge title="EBC: " value="3.5" />
    //         <Badge title="OG: " value="1.044" />
    //         <Badge title="FG: " value="1.010" />
    //         <Badge title="IBU: " value="25" />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>
          {title}
          {author}
        </p>
        <p>dwdfwd</p>
        <ChevronRight
          className="float-right"
          onClick={() => navigation(`/app/recipes/${recipeId}`, { replace: true })}
        />
      </CardFooter>
    </Card>
  );
};
