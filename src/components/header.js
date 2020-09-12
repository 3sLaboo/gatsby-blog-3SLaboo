import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Image from "gatsby-image";

import {AppBar, Toolbar, Fab, useScrollTrigger, Box, Menu, MenuItem, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

import PropTypes from 'prop-types';

import {rhythm} from "../utils/typography";

const Header = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      avatar: file(absolutePath: { regex: "/site-icon.png/" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          blogTitle
          author {
            name
          }
        }
      }
    }
  `);
  const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: 'white',
      boxShadow: '0 0 black',
    },
    toolBox: {
      display: 'flex',
      padding: '0',
    },
    link: {
      textDecoration: 'none',
      '&:link,&:visited,&:hover,&:active': {
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },
    menuLink:{
      marginRight:rhythm(1),
    },
    titleBox: {
      flexGrow: '1',
    },
    menuLinkBox: {
      flexGrow: '1',
      textAlign: 'right',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    menuLinkBoxSm: {
      flexGrow: '1',
      textAlign: 'right',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    scrollButton: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));
  const styleClass = useStyles();
  function ScrollTop(props) {
    const {window, children} = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
      const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
      return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role='presentation' className={styleClass.scrollButton}>
          {children}
        </div>
      </Zoom>
    );
  }
  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };
  return (
    <React.Fragment>
      <AppBar position='static' className={styleClass.appBar}>
        <Toolbar id='back-to-top-anchor' styleClass={styleClass.toolBox}>
          <Box className={styleClass.titleBox}>
            <Link to={`/`} className={styleClass.link}>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt='Saito System Service'
              />
            </Link>
          </Box>
          <Box className={styleClass.menuLinkBox} px={0}>
            <Link to={`/`} className={`${styleClass.link} ${styleClass.menuLink}`}>
              HOME
            </Link>
            <Link to={`/blog`}  className={`${styleClass.link} ${styleClass.menuLink}`}>
              BLOG
            </Link>
            <Link to={`/works`} className={`${styleClass.link} ${styleClass.menuLink}`}>
              WORKS
            </Link>
            <Link to={`/about`} className={`${styleClass.link} ${styleClass.menuLink}`}>
              ABOUT
            </Link>
          </Box>
          <Box className={styleClass.menuLinkBoxSm}>
            <IconButton 
              edge='start' 
              color='default' 
              aria-label='menu'
              aria-controls='menu' 
              aria-haspopup='true'
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <Link to={`/`}      className={`${styleClass.link} ${styleClass.menuLink}`}>
                  HOME
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/blog`}  className={`${styleClass.link} ${styleClass.menuLink}`}>
                  BLOG
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/works`} className={`${styleClass.link} ${styleClass.menuLink}`}>
                  WORKS
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/about`} className={`${styleClass.link} ${styleClass.menuLink}`}>
                  ABOUT
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <ScrollTop {...props}>
        <Fab color='secondary' size='small' aria-label='トップへ'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
export default Header;

