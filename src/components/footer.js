import React from "react"

import {makeStyles} from '@material-ui/core/styles';

import {rhythm} from "../utils/typography";

const Footer = () => {

  const useStyles = makeStyles((theme) => ({
    footer: {
      marginTop:rhythm(1),
    },
  }));

  const styleClass = useStyles();
  return (
    <footer className={styleClass.footer}>
      © {'2020, 齋藤システムサービス by '}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer
