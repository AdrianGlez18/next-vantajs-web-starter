import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js"
import ArrowDownward from "@mui/icons-material/ArrowDownward";

const Landing = ({ title, subtitle }) => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x7388dc,
                    backgroundColor: 0x180539,
                    points: 15.00,
                    maxDistance: 25.00,
                    spacing: 20.00
                })
            )
        };
        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
            }
        }
    }, [vantaEffect]);
    return (
        <Grid
            component="section"
            container
            ref={vantaRef}
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
                position: `relative`,
                height: "100vh",
                width: `100vw`,
                overflow: `hidden`,
                zIndex: -100,
                mb: 15,
            }}
        >
            <Grid item xs={4}>
                <Item></Item>
            </Grid>
            <Grid item xs={2}>
                <Item>
                    <Typography
                        variant="h1"
                        gutterBottom
                        sx={{
                            color: "secondary.main",
                            fontWeight: 400,
                        }}
                    >
                        {title}
                    </Typography></Item>
            </Grid>
            <Grid item xs={2}>
                <Item>
                    <Typography
                        component="p"
                        variant="h3"
                        color="common.white"
                        sx={{
                            mb: 10,
                        }}
                    >
                        {subtitle}
                    </Typography></Item>
            </Grid>
            <Grid item xs={2}>
                <Item></Item>
            </Grid>
            <Grid item xs={2}>
                <Item>
                    <Typography component="p" variant="h6" color="secondary" gutterBottom>
                        ⟱ Keep Scrolling ⟱
                    </Typography>

                </Item>
            </Grid>
        </Grid>
    );
}

export default Landing;