import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";

import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "./BackToTop";

import IconButton from "@mui/material/IconButton"
import Home from "@mui/icons-material/Home"
import StyledLink from "@components/StyledLink";
import Navbar from './Navbar'
import SideDrawer from "./SideDrawer";
import DisableStickyHeader from "./DisableStickyHeader";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
    { title: `home`, path: `/` },
    { title: `about`, path: `/about` },
    { title: `contact`, path: `/contact` },
];

const Header = () => {
    return (
        <>
            <DisableStickyHeader>
                <AppBar position="fixed">
                    <Toolbar>
                        <Container
                            maxWidth="lg"
                            sx={{ display: `flex`, justifyContent: `space-between` }}
                        >
                            <IconButton edge="start" aria-label="home">
                                <StyledLink activeClassName="active" href="/">
                                    <Home
                                        sx={{
                                            color: (theme) => theme.palette.common.white,
                                        }}
                                        fontSize="large"
                                    />
                                </StyledLink>
                            </IconButton>
                            <Navbar navLinks={navLinks} />
                            <SideDrawer navLinks={navLinks} />
                        </Container>
                    </Toolbar>
                </AppBar>
            </DisableStickyHeader>
            <Offset  id="back-to-top-anchor" />

            <BackToTop>
                <Fab color="secondary" size="large" aria-label="back to top">
                    <KeyboardArrowUp />
                </Fab>
            </BackToTop>
        </>
    );
};

export default Header;
