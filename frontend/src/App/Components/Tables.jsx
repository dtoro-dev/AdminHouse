import React from 'react'
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format'
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  // IconButton,
  withStyles
} from '@material-ui/core'
import { ButtonPannel, Icons, Loading } from '.'
import moment from 'moment'

import * as sectionAction from '../../Redux/Actions/sectionAction'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const Tables = props => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { columns, rows } = props
  const { toAction } = props.loginReducer.login[0].role

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Loading load={props.loading}>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table className={classes.table} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rows.length > 0) ?
                rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.order}>
                      {columns.map((column) => {
                        const field = row[column.id];

                        if (column.id === 'pannel') {
                          return (
                            <StyledTableCell key={column.id} align={column.align}>
                              {
                                (field.edit !== undefined) ?
                                  <ButtonPannel
                                    label={field.edit.label}
                                    color={field.color}
                                    click={field.edit.click}
                                    to={field.edit.to}
                                    icon={Icons[toAction[1].icon]}
                                  />
                                  : null
                              }

                              {(field.view !== undefined) ? console.log('siview') : null}

                              {
                                (field.delete !== undefined) ?
                                  <ButtonPannel
                                    label={field.delete.label}
                                    color={field.color}
                                    click={field.delete.click}
                                    to={false}
                                    icon={
                                      (field.delete.value === field.delete.defaultValue) ?
                                        Icons[toAction[4].icon] : Icons[toAction[5].icon]
                                    }
                                  />
                                  : null
                              }
                            </StyledTableCell>
                          )
                        } else {

                          return (
                            <StyledTableCell key={column.id} align={column.align}>
                              {column.format === 'number' ?
                                <NumberFormat
                                  value={field}
                                  displayType={'text'}
                                  thousandSeparator="."
                                  decimalSeparator="," />
                                : null
                              }
                              {column.format === 'date' ? moment(field).format('DD/MM/YYYY') : null}
                              {column.format === 'string' || column.format === undefined ? field : null}
                            </StyledTableCell>
                          );
                        }

                      })}
                    </StyledTableRow>
                  );
                })
                : <TableRow>
                  <TableCell align='center' colSpan={columns.length}>NO SE ENCUENTRAN DATOS</TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={props.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Loading>
  );
}

const mapStateToProps = ({ sectionReducer, loginReducer }) => {
  return { sectionReducer, loginReducer }
}

const mapDispatchToProps = {
  ...sectionAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Tables)
