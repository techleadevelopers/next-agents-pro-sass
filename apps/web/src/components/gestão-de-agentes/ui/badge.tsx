import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:scale-[1.05]",
  {
    variants: {
      variant: {
        default:
          "border border-primary bg-gradient-to-r from-primary to-cyan-500/80 text-primary-foreground shadow hover:shadow-[0_0_8px_var(--primary)]",
        secondary:
          "border border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-[0_0_8px_var(--secondary)]",
        destructive:
          "border border-destructive bg-destructive text-destructive-foreground shadow hover:shadow-[0_0_8px_var(--destructive)]",
        outline:
          "border border-zinc-600 text-foreground hover:bg-zinc-800 hover:shadow",
        success: "border border-green-600 bg-green-700 text-green-100 hover:bg-green-600",

        warning: "border border-yellow-600 bg-yellow-500 text-black hover:bg-yellow-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
