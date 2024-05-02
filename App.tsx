import {MainScreen} from "@/screens/main";
import {Providers} from "@/context/providers";

export default function App() {
  return (
      <Providers>
        <MainScreen/>
      </Providers>
  );
}
