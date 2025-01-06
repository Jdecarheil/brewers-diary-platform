import { Button } from '@/components/ui/button';

type SubmitProps = {
  title: string;
  disabled: boolean;
};

export function Submit({ title, disabled }: SubmitProps) {
  return (
    <Button
      variant={'default'}
      disabled={disabled}
      className="bg-main w-full"
      size={'default'}
      type="submit"
    >
      {title}
    </Button>
  );
}
