import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

const userInfoVariants = cva("flex items-center gap-1", {
  variants: {
    size: {
      default: "[&_P]:text-sm [&_svg]:size-4",
      lg: "[&_P]:text-base [&_svg]:size-5 [&_p]:font-medium [&_p]:text-black",
      sm: "[&_P]:text-xs [&_svg]:size-3.5",
    }
  },
  defaultVariants : {
    size: "default"
  },
});

interface UserInfoProps extends VariantProps<typeof userInfoVariants> {
  name: string;
  className?: string;
};

export const UserInfo = ({
  name,
  className,
  size,
}: UserInfoProps) => {
  return (
    <div className={cn(userInfoVariants({ size, className }))}>
      <Tooltip>
        <TooltipTrigger asChild>
          <p className="text-gray-500 hover:text-gray-800 line-clamp-1">
            {name}
          </p>
        </TooltipTrigger>
        <TooltipContent align="center" className="bg-black/70">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}