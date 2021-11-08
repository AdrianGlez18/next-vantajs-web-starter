import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import StyledLink from "./StyledLink";

const Navbar = ({ navLinks }) => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        {navLinks.map(({ title, path }, i) => (
          <StyledLink
            key={`${title}${i}`}
            href={path}
            variant="button"
            sx={{ color: `white`, opacity: 0.7 }}
          >
            {title}
          </StyledLink>
        ))}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;