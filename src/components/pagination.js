import React from "react";
import { Link } from "gatsby";

import {makeStyles} from '@material-ui/core/styles';

const Pagination = ({ props }) => {
	const {pageContext} = props;
  const {previousPagePath, nextPagePath} = pageContext;
  
  const useStyles = makeStyles((theme) => ({
    navi: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
  }));
  const styleClass = useStyles();
	return (
    <nav>
      <ul className={styleClass.navi}>
        <li>
          <h3>
            {previousPagePath ? <Link to={previousPagePath}>{'<<'}</Link> : null}
          </h3>
        </li>
        <li>
          <h3>
            {nextPagePath ? <Link to={nextPagePath}>{'>>'}</Link> : null}
          </h3>
        </li>
      </ul>
    </nav>

	)
}
export default Pagination