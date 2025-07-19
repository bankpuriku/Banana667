import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">ระบบยืม-คืนอุปกรณ์</h1>
      <div className="space-y-2">
        <Link to="/borrow" className="block bg-blue-500 text-white px-4 py-2 rounded">ยืมอุปกรณ์</Link>
        <Link to="/return" className="block bg-green-500 text-white px-4 py-2 rounded">คืนอุปกรณ์</Link>
        <Link to="/manage" className="block bg-gray-700 text-white px-4 py-2 rounded">จัดการอุปกรณ์</Link>
      </div>
    </div>
  );
}

function Borrow() {
  return <div className="p-4">หน้ายืมอุปกรณ์ (อยู่ระหว่างพัฒนา)</div>;
}

function Return() {
  return <div className="p-4">หน้าคืนอุปกรณ์ (อยู่ระหว่างพัฒนา)</div>;
}

function Manage() {
  return <div className="p-4">หน้าจัดการอุปกรณ์ (อยู่ระหว่างพัฒนา)</div>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/return" element={<Return />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </Router>
  );
}