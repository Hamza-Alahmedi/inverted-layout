import Navigation from "../components/Navigation";
import Home from "../screen/Home";

export default function HomeLayout() {
  return (
    <div>
      <Navigation styleVariant="bg-transparent" />
      <Home />
    </div>
  );
}
