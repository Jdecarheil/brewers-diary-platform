import { Button } from '@material-tailwind/react';

interface ButtonProp {
  onClick: () => void;
  variant: string;
  size: string;
}

export const ButtonDefault = (props: ButtonProp) => {
  return <Button size="sm"></Button>;
};
