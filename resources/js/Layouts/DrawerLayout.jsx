import { Link } from "@inertiajs/react";

export default function Drawer() {
    return(
        <div className="bg-gray-800 text-white w-64 p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <ul>
          <li className="py-2 hover:bg-gray-700 rounded">
            <Link href="/dashboard">Home</Link>
          </li>
          <li className="py-2 hover:bg-gray-700 rounded">
            <Link href="#">Products</Link>
          </li>
          <li className="py-2 hover:bg-gray-700 rounded">
            <Link href="/orders">Orders</Link>
          </li>
          <li className="py-2 hover:bg-gray-700 rounded">
            <Link href="#">Profile</Link>
          </li>
          <li className="py-2 hover:bg-gray-700 rounded">
            <Link href="#">Settings</Link>
          </li>
          <li className="py-2 hover:bg-gray-700 rounded">
            <Link href="#">Logout</Link>
          </li>
        </ul>
      </div>
    );
}