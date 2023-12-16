import Navigation from "../components/Navigation";
import "../App.css";

export default function HomeLayout() {
  return (
    <>
      <div className="bg-image bg-center bg-cover h-screen">
        <Navigation styleVariant="bg-transparent" />
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="home-main-text">Creative Digital Studio</h1>
          <h4 className="home-text">
            We are delicering beautiful digital Products
          </h4>
          <button className="btn">WORK WITH US</button>
        </div>
      </div>
    </>
  );
}
