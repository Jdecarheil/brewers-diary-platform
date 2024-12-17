export interface CardProps {
  title: string;
  author: string;
}

export const Card = (props: CardProps) => {
  const { title, author } = props;
  return (
    <>
      <div className="border border-r-4 h-3/4">
        <p>{title}</p>
        <p>{author}</p>
      </div>
    </>
  );
};
