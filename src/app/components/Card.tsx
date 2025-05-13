import clsx from "clsx";
type CardProps={
   children: React.ReactNode
 variant: 'default' | 'outlined' | 'elevated'
 padding: 'none' | 'sm' | 'md' | 'lg' 
 radius: 'none' | 'sm' | 'md' | 'lg' | 'full' 
 className?:string
}



function Card({children,variant='default',padding='md',radius='md',className}:CardProps){
  const cardClasses = clsx(
    // 기본 스타일
    "overflow-hidden transition-all",

    // 패딩
    {
      "p-0": padding === "none",
      "p-3": padding === "sm",
      "p-5": padding === "md",
      "p-8": padding === "lg",
    },

    //variant
    {
      "bg-white border-gray-300":
        variant === "default",
      "bg-white border-gray-600":
        variant === "outlined",
      "border border-blue-600 text-blue-600 hover:border-blue-600":
        variant === "elevated",
    },
className,
    
  );
  return(
    <div>
<div>{children}</div>
      <p>내용</p>
    </div>
  )

}
export default Card;