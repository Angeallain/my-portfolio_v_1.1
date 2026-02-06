import { useMemo, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import AuthSidePanel from "../components/auth/AuthSidePanel";

export default function Auth() {
  const [mode, setMode] = useState("register"); // "login" | "register"
  const isLogin = mode === "login";

  const Form = useMemo(() => (isLogin ? LoginForm : RegisterForm), [isLogin]);

  // Smooth swap between left/right columns
  const spring = { type: "spring", stiffness: 220, damping: 26 };

  return (
    <LayoutGroup>
      <div className="min-h-screen flex items-stretch">
        <div className="flex w-full">
          {/* Form column */}
          <motion.div
            layout
            transition={spring}
            className={`w-full md:w-1/2 ${isLogin ? "order-1" : "order-2"}`}
          >
            <Form switchMode={() => setMode(isLogin ? "register" : "login")} />
          </motion.div>

          {/* Side panel column */}
          <motion.div
            layout
            transition={spring}
            className={`w-full md:w-1/2 ${isLogin ? "order-2" : "order-1"}`}
          >
            <AuthSidePanel
              buttonText={isLogin ? "Sign up" : "Sign in"}
              onClick={() => setMode(isLogin ? "register" : "login")}
            />
          </motion.div>
        </div>
      </div>
    </LayoutGroup>
  );
}