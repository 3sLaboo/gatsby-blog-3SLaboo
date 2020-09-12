import React from "react"
import {Link} from "gatsby";
import {Box} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import {rhythm} from "../utils/typography";

const PostList = ({title, listUrl, postList}) => {

  const useStyles = makeStyles((theme) => ({
    boxContents: {
      marginTop: rhythm(1),
      paddingTop: rhythm(.5),
    },
    article: {
      marginBottom: rhythm(1),
      borderBottom: '1px solid #d3d3d3',
    },
    link: {
      boxShadow:'none',
      marginBottom: rhythm(1 / 4),
    },
  }));

  let list;
  if (typeof listUrl === 'undefined') {
    list = (
      <div/>
    );
  } else {
    list = (
      <Link to={listUrl}>
        もっと見る＞＞
      </Link>
    );
  }

  const styleClass = useStyles();
  if (postList.length === 0) {
    return (
      <Box className={styleClass.boxContents}>
        <h3>
          {title}
        </h3>
        鋭意製作中
      </Box>
    )
  } else {
    return (
      <Box className={styleClass.boxContents}>
        <h3>
          {title}
        </h3>
        {postList.map(({ node }) => {
          const postTitle = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug} className={styleClass.article}>
              <header>
                <Link className={styleClass.link} to={node.fields.slug}>
                  <h3>
                    {postTitle}
                  </h3>
                </Link>
                {node.frontmatter.date}
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
        {list}
      </Box>
    )
  }
}

export default PostList
