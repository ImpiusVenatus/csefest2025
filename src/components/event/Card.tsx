import clsx from "clsx";
import { forwardRef } from "react";

interface CardProps {
    className?: string;
    children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, children }, ref) => {
        return (
            <div
                ref={ref}
                className={clsx(
                    "rounded-2xl border p-6 backdrop-blur",
                    "border-zinc-200 bg-white/90 supports-[backdrop-filter]:bg-white/70 dark:border-white/10 dark:bg-white/5",
                    className
                )}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";

export default Card;
