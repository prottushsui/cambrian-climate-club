import { cn } from '@/lib/utils';
import { type HTMLAttributes, createContext, useContext } from 'react';
import { Badge, type BadgeProps } from '@/components/ui/badge'; // Ensure Badge is correctly imported

type BadgeContextType = {
  themed: boolean;
};

const BadgeContext = createContext<BadgeContextType>({ themed: false });

const useBadgeContext = () => {
  const context = useContext(BadgeContext);
  if (!context) {
    throw new Error('useBadgeContext must be used within a Badge');
  }
  return context;
};

export type AnnouncementProps = BadgeProps & {
  themed?: boolean;
};

export const Announcement = ({
  variant = 'outline',
  themed = false,
  className,
  ...props
}: AnnouncementProps) => (
  <BadgeContext.Provider value={{ themed }}>
    <Badge
      variant={variant}
      className={cn(
        'group relative w-fit border-muted bg-background p-0 text-foreground',
        'hover:bg-accent hover:text-accent-foreground',
        themed && 'bg-primary text-primary-foreground',
        className
      )}
      {...props}
    />
  </BadgeContext.Provider>
);

export type AnnouncementTagProps = HTMLAttributes<HTMLDivElement>;
export const AnnouncementTag = ({
  className,
  ...props
}: AnnouncementTagProps) => {
  const { themed } = useBadgeContext();

  return (
    <div
      className={cn(
        'absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-foreground',
        themed && 'bg-primary-foreground',
        className
      )}
      {...props}
    />
  );
};

export type AnnouncementTitleProps = HTMLAttributes<HTMLDivElement>;
export const AnnouncementTitle = ({
  className,
  ...props
}: AnnouncementTitleProps) => (
  <div
    className={cn('flex items-center gap-1 truncate py-1', className)}
    {...props}
  />
);
