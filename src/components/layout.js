import React from "react";

import {Container} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import Header    from "../components/header";
import AdminInfo from "../components/adminInfo";
import Footer    from "../components/footer";
import {rhythm}  from "../utils/typography";

const Layout = ({location, children}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const useStyles = makeStyles((theme) => ({
    layoutContainer: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(45),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      paddingTop: '0',
      paddingLeft: '0',
      paddingRight: '0',
      backgroundColor:'white',
    },
    mainContainer: {
      paddingLeft: rhythm(1),
      paddingRight: rhythm(1),
    },
  }));
  const styleClass = useStyles();
  if (location.pathname === rootPath) {
    return (    
      <Container className={styleClass.layoutContainer}>
        <Header/>
        <Container className={styleClass.mainContainer}>
          <AdminInfo/>
          <main>{children}</main>
          <Footer/>
        </Container>
      </Container>
    )
  } else {
    return (    
      <Container className={styleClass.layoutContainer}>
        <Header/>
        <Container className={styleClass.mainContainer}>
          <main>{children}</main>
          <AdminInfo/>
          <Footer/>
        </Container>
      </Container>
    )
  }
}

export default Layout
