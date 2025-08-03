// Interface For Button
interface ButtonProps {
  children: React.ReactNode; // Contenido del Botón
  className?: string; // Clases adicionales
  onClick?: () => void; // Función que se ejecuta al hacer click
}

// Button Component
export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
