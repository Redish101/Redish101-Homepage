export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  dark?: boolean;
}

export function Button(props: ButtonProps) {
  const { children, href } = props;

  const darkStyle = props.dark
    ? "text-white bg-foreground hover:text-black hover:bg-background"
    : "text-black bg-background hover:text-white hover:bg-foreground";

  return (
    <a href={href}>
      <button
        className={`${darkStyle} px-4 py-2 rounded-md transition duration-200 ease-in-out`}
      >
        {children}
      </button>
    </a>
  );
}
