import { cn } from "@/lib/utils";

export const Chip = ({
  component: Component = "span",
  children,
  ...props
}: {
  component: React.ElementType;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <Component
      {...props}
      className={cn(
        "px-[16px] flex items-center border rounded-[16px] min-h-[32px] text-neutral-main hover:bg-[rgba(0,0,0,.04)]",
        props.className
      )}
    >
      {children}
    </Component>
  );
};
