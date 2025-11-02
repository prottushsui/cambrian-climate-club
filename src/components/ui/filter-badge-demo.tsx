import { FilterBadge } from "@/components/ui/filter-badge"

export function FilterBadgeDemo() {
  const handleRemove = (badgeLabel: string) => {
    console.log(`Removing badge: ${badgeLabel}`);
    // Implement removal logic here, e.g., update state
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-100 dark:bg-gray-800">
      <FilterBadge
        label="Department"
        value="Sales"
        onRemove={() => handleRemove("Department: Sales")}
      />
      <FilterBadge
        label="Location"
        value="Zurich"
        onRemove={() => handleRemove("Location: Zurich")}
      />
      <FilterBadge
        label="Sales volume"
        value="$100K-5M"
        onRemove={() => handleRemove("Sales volume: $100K-5M")}
      />
      <FilterBadge
        label="Status"
        value="Closed"
        onRemove={() => handleRemove("Status: Closed")}
      />
       <FilterBadge
        variant="avatar"
        avatar="https://avatars.githubusercontent.com/u/16860528" // Example avatar
        onRemove={() => handleRemove("Avatar Filter")}
      >
        <span className="text-xs font-medium">User Filter</span>
      </FilterBadge>
    </div>
  )
}
