import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 
import "./index.css"; 


export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    if (username === "admin" && password === "password") {
      console.log("Login successful");
    } else {
      navigate("/404");
    }
  };

  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <motion.button whileHover={{ scale: 1.05 }} type="submit">Sign In</motion.button>
      </form>
    </motion.div>
  );
}
