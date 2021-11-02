import Nabbar from "../components/Nabbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-4 lg:px-48 sm:px-20 md:px-32">
        <div className="col-span-12 p-4 h-full text-base text-center bg-white rounded-2xl dark:bg-dark-500 lg:col-span-3 shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="flex overflow-hidden flex-col col-span-12 bg-white rounded-2xl dark:bg-dark-500 lg:col-span-9 sm:col-span-12 shadow-custom-light dark:shadow-custom-dark">
          <Nabbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
