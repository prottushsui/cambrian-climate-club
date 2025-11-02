import { GridList, GridListItem } from "@/components/ui/grid-list" // Adjust path if needed

export function GridListDemo() {
  // Sample data
  const items = [
    { id: 1, name: "Charizard", type: "Fire/Flying" },
    { id: 2, name: "Blastoise", type: "Water" },
    { id: 3, name: "Venusaur", type: "Grass/Poison" },
    { id: 4, name: "Pikachu", type: "Electric" },
  ];

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Pokemon Team</h2>
      <GridList aria-label="Favorite Pokemon" selectionMode="multiple">
        {items.map((item) => (
          <GridListItem key={item.id}>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.type}</p>
            </div>
          </GridListItem>
        ))}
      </GridList>
    </div>
  );
}
