import { Input } from '@/components/ui/input';

interface TextInput {
  type: string;
  placeholder: string;
}

export function TextInput(props: TextInput) {
  return <Input {...props} />;
}
