"use client";

import { JollyCheckboxGroup } from "@/components/ui/checkbox"; // Adjust path if needed
import { useState } from "react";

export function CheckboxDemo() {
  const [selected, setSelected] = useState<string[]>(["option-1"]);

  const options = [
    { value: "option-1", label: "Accept terms and conditions" },
    { value: "option-2", label: "Subscribe to newsletter" },
    { value: "option-3", label: "Enable notifications" },
  ];

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <JollyCheckboxGroup
        label="Preferences"
        description="Select your communication preferences:"
        value={selected}
        onChange={(value) => {
            console.log("Selected values:", value);
            setSelected(value);
        }}
        className="space-y-2"
      >
        {options.map((option) => (
          <JollyCheckboxGroup.Item key={option.value} value={option.value}>
            {option.label}
          </JollyCheckboxGroup.Item>
        ))}
      </JollyCheckboxGroup>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Selected: {selected.join(", ") || "None"}
      </p>
    </div>
  );
}
