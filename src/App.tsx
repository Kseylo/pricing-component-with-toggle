import { Card } from "./components/Card.tsx";
import { TogglePricing } from "./components/TogglePricing.tsx";
import { useState } from "react";
function App() {
  const [checked, setChecked] = useState(true);
  return (
    <main
      className={
        "min-h-dvh mx-auto container flex px-2 flex-col items-center my-14 gap-10"
      }
    >
      <h1 className={"text-grayish-blue text-3xl"}>Our Pricing</h1>
      <TogglePricing
        checked={checked}
        onChange={() => setChecked((prevState) => !prevState)}
      />
      <div
        className={
          "flex flex-col gap-8 w-full items-center justify-center mt-10 lg:flex-row lg:gap-0"
        }
      >
        <Card
          title={"Basic"}
          price={checked ? 19.99 : 199.99}
          features={["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"]}
        />
        <Card
          title={"Professional"}
          price={checked ? 24.99 : 249.99}
          features={["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"]}
          featured
        />
        <Card
          title={"Master"}
          price={checked ? 39.99 : 399.99}
          features={["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"]}
        />
      </div>
    </main>
  );
}

export default App;
