import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import Image from "gatsby-image";

import {Box} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import {rhythm} from "../utils/typography";

const AdminInfo = () => {
  const data = useStaticQuery(graphql`
    query AdminInfoQuery {
      adminInfo: file(absolutePath: { regex: "/admin-info.jpg/" }) {
        childImageSharp {
          fixed(width: 1080, height: 300) {
            ...GatsbyImageSharpFixed
            src
          }
        }
      }
      qittaIcon: file(absolutePath: { regex: "/qiita_icon.png/" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
            src
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summaryMain
            summary
          }
          social {
            twitter
            linkedin
            instagram
            github
            qiita
          }
        }
      }
    }
  `)
  const useStyles = makeStyles((theme) => ({
    infoBox: {
      marginTop: rhythm(.3),
      backgroundImage: `url(${data.adminInfo.childImageSharp.fixed.src})`,
      backgroundSize: '100% 100%',
      [theme.breakpoints.up('sm')]: {
        height: rhythm(15),
        paddingRight: rhythm(20),
      },
      [theme.breakpoints.down('sm')]: {
        height: rhythm(8),
        paddingRight: rhythm(1),
      },
    },
    box: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      [theme.breakpoints.up('sm')]: {
        height: rhythm(14),
      },
      [theme.breakpoints.down('sm')]: {
        height: rhythm(8.2),
      },
    },
    boxContent: {
      paddingBottom: '0px',
      [theme.breakpoints.up('sm')]: {
        paddingTop: rhythm(2),
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: rhythm(1),
      },
    },
    companyName: {
      paddingBottom: '0px',
      marginBottom: '0px',
    },
    companyNameInitial1:{
      color:`#044fcb`,
    },
    companyNameInitial2:{
      color:`#5c7db4`,
    },
    companyNameInitial3:{
      color:`#a5b8d8`,
    },
    summary:{
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    authorName:{
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    greeting: {
      paddingBottom: '0px',
      marginBottom: '0px',
    },
    summarySm:{
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    twitterIcon: {
      color: '#1DA1F2',
    },
    linkedInIcon: {
      color: '#0077B5',
    },
    gitHubIcon: {
      color: '#000000',
      marginLeft:'5px',
    },
    instagramIcon: {
      color:'#CF2E92',
    },
  }));
  const styleClass = useStyles();
  const author = data.site.siteMetadata.author;
  const social = data.site.siteMetadata.social;
  return (
    <Box className={styleClass.infoBox}>
      <Box className={styleClass.box}>
        <Box className={styleClass.boxContent}>
          <h1 className={styleClass.companyName}>
            <span className={styleClass.companyNameInitial1}><strong>S</strong></span><small>aito</small>
            <span className={styleClass.companyNameInitial2}><strong>S</strong></span><small>ystem</small>
            <span className={styleClass.companyNameInitial3}><strong>S</strong></span><small>ervice</small>
          </h1>
          <Box className={styleClass.summary}>
            <h4 className={styleClass.greeting}>
              {author.summaryMain}
            </h4>
          </Box>
          <Box className={styleClass.authorName}>
            Written by <strong>{author.name}</strong>
          </Box>
          <Box className={styleClass.summarySm}>
            <h5 className={styleClass.greeting}>
              {author.summary}
            </h5>
          </Box>
          Contact:
          <Box>
            <a href={`https://twitter.com/${social.twitter}`} target='_blank' rel='noreferrer'>
              <TwitterIcon fontSize="large" className={styleClass.twitterIcon}/>
            </a>
            <a href={`https://www.linkedin.com/in/${social.linkedin}/`} target='_blank' rel='noreferrer'>
              <LinkedInIcon fontSize="large" className={styleClass.linkedInIcon}/>
            </a>
            <a href={`https://qiita.com/${social.qiita}/`} target='_blank' rel='noreferrer'>
              <Image fixed={data.qittaIcon.childImageSharp.fixed}/>
            </a>
            <a href={`https://github.com/${social.github}/`} target='_blank' rel='noreferrer'>
              <GitHubIcon fontSize="large" className={styleClass.gitHubIcon}/>
            </a>
            <a href={`https://www.instagram.com/${social.instagram}/`} target='_blank' rel='noreferrer'>
              <InstagramIcon fontSize="large" className={styleClass.instagramIcon}/>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default AdminInfo

