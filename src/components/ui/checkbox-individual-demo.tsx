"use client";

import { JollyCheckbox } from "@/components/ui/checkbox"; // Adjust path if needed
import { useState } from "react";

export function CheckboxIndividualDemo() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Individual Checkbox Demo</h2>
      <JollyCheckbox
        isSelected={isChecked}
        onChange={setIsChecked}
      >
        Accept terms and conditions
      </JollyCheckbox>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        State: {isChecked ? "Checked" : "Unchecked"}
      </p>
    </div>
  );
}
