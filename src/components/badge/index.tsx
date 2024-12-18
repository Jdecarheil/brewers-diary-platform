export type BadgeProps = {
  title: string;
  value: string;
};

export const Badge = (props: BadgeProps) => {
  const { title, value } = props;

  return (
    <div className="bg-main text-secondary rounded-md text-badge text-center">
      {title}
      {value}
    </div>
  );
};
