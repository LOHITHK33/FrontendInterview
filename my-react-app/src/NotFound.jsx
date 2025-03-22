import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.css";

export default function NotFound() {
  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1 style={{ color: "red", fontSize: "48px" }}>404</h1>
      <p>Oops! Page not found.</p>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link to="/">
          <button>Go Home</button>
        </Link>
      </motion.div>
    </motion.div>
  );
}