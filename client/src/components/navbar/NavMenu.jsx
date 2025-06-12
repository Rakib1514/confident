import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import AccountIcon from "../AccountIcon";

const NavMenu = () => {
  const user = useSelector((state) => state.auth.user);

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (!user) {
      return navigate("/sign-in");
    }

    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountIcon width={32} height={32} />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem>
          <Link to={"/something"}>SOmething</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default NavMenu;
