import { GridListItem } from "@/components/ui/grid-list"; // Adjust path if needed

export function GridListItemDemo() {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Grid List Item Examples</h2>
      <div className="space-y-4">
        {/* Basic Item */}
        <GridListItem>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Basic Item</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">This is a simple grid list item.</p>
          </div>
        </GridListItem>

        {/* Item with Link-like styling */}
        <GridListItem className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Clickable Item</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Hover over me!</p>
          </div>
        </GridListItem>

         {/* Item with Icon */}
        <GridListItem>
          <div className="flex items-start gap-3">
             <div className="mt-1 p-2 rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              {/* Replace with a relevant icon component */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Item with Icon</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">This item has an icon.</p>
            </div>
          </div>
        </GridListItem>
      </div>
    </div>
  );
}
