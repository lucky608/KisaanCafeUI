import React, { memo, useEffect, useState } from "react";


import { AppBar, Button, IconButton, Stack, Typography } from "@mui/material";
import { CustomTopBar, WebLogoImg, ToolbarElement, classes } from "./Styles";
import ShopLogo from "../images/ShopLogo.png"
import UserProfileIcon from "../images/UserProfileIcon.jpg"
import addToCartImage from "../images/addToCart.png"
import { useNavigate } from "react-router-dom";
export const NavigationBar = (
    ({ showDropDown = true }) => {
        const [showProfile, setShowProfile] = useState(false);
        const handleClickOutside = (event) => {
            setShowProfile(false);
        };

        useEffect(() => {
            if (showProfile) {
                window.addEventListener("click", handleClickOutside);
            }
            return () => {
                window.removeEventListener("click", handleClickOutside);
            };
        }, [showProfile]);

          const navigate = useNavigate();
        return (
            <CustomTopBar>
                <AppBar className="custom-topBar" data-testid="navbar">
                    <ToolbarElement data-testid="toolbar">
                        <Typography variant="button" className={classes.typography}>
                            <WebLogoImg
                                src={ShopLogo}
                                alt="WebLogo"
                                onClick={() => {
                                      navigate("/");
                                }}
                            />
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            {/* {showDropDown && <DropDown />} */}
                            <Button variant="text" onClick={() => {
                                navigate("/dashboard");
                            }}>All Products</Button>
                            <IconButton
                                className="dropdown-profile"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowProfile(!showProfile);
                                }}
                            >
                                <img
                                    src={addToCartImage}
                                    alt="addToCartImage"
                                    className={classes.userProfileIcon}
                                    title="addToCart"
                                />
                            </IconButton>
                            <IconButton
                                className="dropdown-profile"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowProfile(!showProfile);
                                }}
                            >
                                <img
                                     src={UserProfileIcon}
                                    alt="userProfileIcon"
                                    className={classes.userProfileIcon}
                                    title="Profile"
                                />
                            </IconButton>
                            {/* {accessTokenFromSlice && showProfile && (
                                <ProfileMenu showProfile={showProfile} />
                            )} */}
                        </Stack>
                    </ToolbarElement>
                </AppBar>
            </CustomTopBar>
        );
    }
);
