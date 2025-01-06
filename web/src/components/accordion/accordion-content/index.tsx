import { AccordionContent as CnAccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Trash } from 'lucide-react';

type AccordionProps = {
  title: string;
  weight: number;
  ebc: number;
  ratio: number;
  img: string;
};

export const AccordionContent = ({ title, img }: AccordionProps) => {
  return (
    <CnAccordionContent>
      <div className="flex flex-colspace-x-2">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3 w-full">
          <Avatar>
            <AvatarImage src={img} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Label htmlFor="terms">{title}</Label>
          <Trash />
        </div>
      </div>
    </CnAccordionContent>
  );
};
