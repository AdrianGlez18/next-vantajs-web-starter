import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography'
import Stack from "@mui/material/Stack";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

import StyledLink from "@components/StyledLink";

const Footer = () => {
    return <Box component="footer" sx={{ py: 5, bgcolor: "primary.main" }}>
        <Stack
  direction="row"
  justifyContent="center"
  spacing={4}
  sx={{ mb: 5 }}
>
<StyledLink
  sx={{ textDecoration: "none", color: "common.white" }}
  href="#"
  target="_blank"
  rel="noopener noreferrer"
>
  <Facebook fontSize="large" />
</StyledLink>
<StyledLink
  sx={{ textDecoration: "none", color: "common.white" }}
  href="#"
  target="_blank"
  rel="noopener noreferrer"
>
  <Twitter fontSize="large" />
</StyledLink>
<StyledLink
  sx={{ textDecoration: "none", color: "common.white" }}
  href="#"
  target="_blank"
  rel="noopener noreferrer"
>
  <Instagram fontSize="large" />
</StyledLink>
</Stack>
        <Typography align="center" color="common.white">
            © 2021 - {new Date().getFullYear()}, AdrianGlez18
        </Typography>
    </Box>;
};

export default Footer;