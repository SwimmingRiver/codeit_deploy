import clsx from "clsx";

type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "outlined";
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props
:InputProps){
  const inputClasses=clsx(
    "rounded focus:outline-none focus:ring-2 transition-all",
    {//size
      "p-sm font-sm":props.size === 'sm',
      "p-md font-md":props.size === 'md',
      "p-lg font-lg":props.size === 'lg',
    },
    {//variant
      "border":props.variant === "default",
      "bg-blue-600":props.variant === "filled",
      "bg-none border":props.variant === "outlined",
    },
    props.error && "border-red-600",
    props.className
  )
return(
<div >
  <label htmlFor="email">{props.label}</label>
  <input className={inputClasses} placeholder={props.placeholder}/>
</div>
)
}

export default Input;