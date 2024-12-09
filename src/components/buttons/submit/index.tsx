import { Button } from '@/components/ui/button';
export function Submit(props: { title: string; disabled: boolean }) {
  const { title, disabled } = props;
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
