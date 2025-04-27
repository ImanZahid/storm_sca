import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8">Storm_SCA Project</h1>
      <div className="flex gap-4">
        <Button variant="default">Default Button</Button>
        <Button variant="outline">
          <SunIcon className="h-4 w-4 mr-2" />
          Light Mode
        </Button>
        <Button variant="secondary">
          <MoonIcon className="h-4 w-4 mr-2" />
          Dark Mode
        </Button>
      </div>
    </div>
  );
}

export default App;
