
import { Link } from "react-router-dom";

function Navigation({ styleVariant }) {
  return (
    <div className={`flex justify-between py-12 ${styleVariant}`}>
      <div className="px-24">
        <ul className="flex gap-4">
          <li>
            <Link to="#">lOGO</Link>
          </li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </div>
      <div className="px-24">
        <ul className="flex gap-4 ">
          <li>TWITTER</li>
          <li>INSTEGRAM</li>
          <li>OTHER</li>
        </ul>
      </div>
    </div>
  );
}
export default Navigation;

// className="flex flex-row bg-white p-3 gap-4 text-stone-600 hover:text-stone-900"
