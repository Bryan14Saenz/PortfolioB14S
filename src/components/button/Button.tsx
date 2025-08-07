// Interface For Button
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Button Component
export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
