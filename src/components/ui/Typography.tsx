import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'muted';
  as?: keyof JSX.IntrinsicElements;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'p', as, children, ...props }, ref) => {
    const Component = as || variant;

    const baseClasses = 'font-body';
    
    const variantClasses = {
      h1: 'scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl font-heading',
      h2: 'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-heading',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight font-heading',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight font-heading',
      p: 'leading-7 [&:not(:first-child)]:mt-6 font-body',
      small: 'text-sm font-medium leading-none font-body',
      muted: 'text-sm text-muted-foreground font-body'
    };

    return (
      <Component
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Typography.displayName = 'Typography';

export { Typography };