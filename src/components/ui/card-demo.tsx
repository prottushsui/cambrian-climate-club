import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Adjust path if needed
import { Button } from "@/components/ui/button"; // Adjust path if needed
import { Input } from "@/components/ui/input"; // Adjust path if needed
import { Label } from "@/components/ui/label"; // Adjust path if needed

export function CardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto">
      {/* Basic Card */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Card</CardTitle>
          <CardDescription>This is a simple card component.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </CardFooter>
      </Card>

      {/* Card with Form */}
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign in</Button>
        </CardFooter>
      </Card>

      {/* Card with Image (Placeholder) */}
      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-cyan-500 to-blue-500" /> {/* Placeholder image area */}
        <CardHeader>
          <CardTitle>Project Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Short description of the project displayed in this card.</p>
        </CardContent>
        <CardFooter>
          <Button>View Details</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
