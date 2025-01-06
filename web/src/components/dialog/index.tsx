import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ReactNode } from 'react';

type DialogProps = {
  title: string;
  description: string;
  children?: ReactNode;
  buttonTitle: string;
  buttonAction: () => void;
};

export const DialogBody = ({
  title,
  description,
  children,
  buttonTitle,
  buttonAction,
}: DialogProps) => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      {children ? children : null}
      <DialogFooter className="self-auto">
        <Button onClick={buttonAction} className=" bg-main">
          {buttonTitle}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
