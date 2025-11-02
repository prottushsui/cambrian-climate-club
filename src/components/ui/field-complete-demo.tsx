import { FieldGroup, Label, FormDescription, FieldError } from "@/components/ui/field"; // Adjust path
import { Input } from "@/components/ui/input"; // Ensure Input exists

export function FieldCompleteDemo() {
  return (
    <div className="p-6 space-y-8 max-w-md mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Field Component Showcase</h2>

      {/* Standard Field */}
      <div className="space-y-2">
        <Label htmlFor="username-showcase">Username</Label>
        <FieldGroup>
          <Input id="username-showcase" placeholder="Enter your username" />
        </FieldGroup>
        <FormDescription>Unique identifier for your account.</FormDescription>
      </div>

      {/* Ghost Variant Field */}
      <div className="space-y-2">
        <Label htmlFor="email-showcase">Email Address</Label>
        <FieldGroup variant="ghost">
          <Input id="email-showcase" type="email" placeholder="you@example.com" />
        </FieldGroup>
        <FormDescription>We'll never share your email.</FormDescription>
      </div>

      {/* Field with Error */}
      <div className="space-y-2">
        <Label htmlFor="password-showcase">Password</Label>
        <FieldGroup invalid> {/* Mark group as invalid */}
          <Input id="password-showcase" type="password" placeholder="Strong password" />
        </FieldGroup>
        <FormDescription>Create a strong password.</FormDescription>
        <FieldError>Password must be at least 8 characters long.</FieldError> {/* Show error */}
      </div>

      {/* Disabled Field */}
      <div className="space-y-2">
        <Label htmlFor="disabled-field" disabled>Disabled Field</Label>
        <FieldGroup disabled>
          <Input id="disabled-field" value="This field is disabled" disabled />
        </FieldGroup>
        <FormDescription>You cannot edit this field.</FormDescription>
      </div>
    </div>
  );
}
