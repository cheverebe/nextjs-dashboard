import { SkeletonInput } from './skeleton-input';

type SelectProps = {
  id?: string;
  name?: string;
  children: React.ReactNode;
  className?: string;
  defaultValue?: string;
  loading?: boolean;
};

export function Select({
  id,
  name,
  children,
  className,
  defaultValue,
  loading,
}: SelectProps) {
  if (loading) {
    return <SkeletonInput />;
  }
  return (
    <select
      id={id}
      name={name}
      className={
        'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 ' +
        className
      }
      defaultValue={defaultValue}
    >
      {children}
    </select>
  );
}

type SelectItemProps = {
  children: React.ReactNode;
  value?: string;
};

export function SelectItem({ children, value }: SelectItemProps) {
  return <option value={value}>{children}</option>;
}
