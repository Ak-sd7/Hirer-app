import { Stack } from "@mui/material";
import "../Styles/count.css"
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {useEffect}  from "react";

const Counting = () => {
    const Increment = (a)=>{
        const count = useMotionValue(0);
        const rounded = useTransform(count, Math.round);
      
        useEffect(() => {
          const animation = animate(count, a, { duration: 10 });
      
          return animation.stop;
        },[count, a]);
      
        return <motion.h1>{rounded}</motion.h1>;
    }

    return(
        <div>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="space-between">
                <div className="pl-6 flex flex-col text-slate-100">
                    {Increment(1000)}+
                    <h3>Companies / Startups</h3>
                </div>
                <div></div>
                <div></div>
            </Stack>
        </div>
    );
}

export default Counting