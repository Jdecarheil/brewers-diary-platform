export type BadgeProps = {
  title: string;
  value: string;
};

export const Badge = ({ title, value }: BadgeProps) => {
  return (
    <div className="bg-main text-secondary rounded-md text-badge text-center">
      {title}
      {value}
    </div>
  );
};
