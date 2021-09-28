import { useState, ChangeEvent, MouseEvent } from "react";
import {
    Table,
    TableBody,
    TableRow,
    TablePagination,
    Checkbox,
    TableCell,
    Tooltip,
    IconButton,
    TableContainer,
    Paper,
} from "@material-ui/core";
import dynamic from "next/dynamic";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import useRedux from "@hooks/useRedux";
import EnhancedTableHead from "@components/TableHead";
import { stableSort, getComparator } from "@utils/tableFunctions";
import EnhancedTableToolbar from "./TableToolbar";
import { useStyles } from "@styles/table.styles";
import { Data, formValues, Order } from "../types";
import { deleteProductInventoryAction } from "@store/actions/inventoryAction";

const InventoryModal = dynamic(() => import("../components/InventoryModal"));

type selectedFormValuesTypes = {
    selectedField: formValues;
    selectedIndex: number;
};

export default function EnhancedTable() {
    const classes = useStyles();
    const [order, setOrder] = useState<Order>("asc");
    const [orderBy, setOrderBy] = useState<keyof Data>("name");
    const [selected, setSelected] = useState<string[]>([]);
    const [selectedFormValues, setSelectedFormValues] =
        useState<selectedFormValuesTypes>({
            selectedField: null,
            selectedIndex: null,
        });
    const [page, setPage] = useState(0);
    const [modal, setModal] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { dispatch, stateFromRedux } = useRedux("inventory");

    const tableData = stateFromRedux.products;

    function toggleModal(open) {
        return setModal(open);
    }
    function editProduct(index) {
        toggleModal(true);
        const selectedProduct = stateFromRedux.products[index];
        setSelectedFormValues({
            ...selectedFormValues,
            selectedField: selectedProduct,
            selectedIndex: index,
        });
    }

    function deleteProduct(index) {
        console.log("selected index", index);
        dispatch(deleteProductInventoryAction(index));
    }

    const handleRequestSort = (
        event: MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = tableData.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    console.log("selected", selected);

    const handleClick = (event: MouseEvent<unknown>, name: any) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name: any) => selected.indexOf(name) !== -1;

    const emptyRows =
        rowsPerPage -
        Math.min(rowsPerPage, tableData.length - page * rowsPerPage);

    return (
        <>
            <InventoryModal
                modal={modal}
                handleClose={() => toggleModal(false)}
                formValues={selectedFormValues}
            />
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <EnhancedTableToolbar numSelected={selected.length} />
                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="inventoryManager"
                            size="medium"
                            aria-label="inventory manager"
                        >
                            <EnhancedTableHead
                                classes={classes}
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={tableData.length}
                            />
                            <TableBody>
                                {stableSort(
                                    tableData,
                                    getComparator(order, orderBy),
                                )
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage,
                                    )
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(
                                            row.name,
                                        );
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key={row.name}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={isItemSelected}
                                                        onClick={(event) =>
                                                            handleClick(
                                                                event,
                                                                row.name,
                                                            )
                                                        }
                                                        inputProps={{
                                                            "aria-labelledby":
                                                                labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                >
                                                    {row.name}
                                                </TableCell>
                                                <TableCell>
                                                    {row.category}
                                                </TableCell>
                                                <TableCell>
                                                    {row.price}
                                                </TableCell>
                                                <TableCell>
                                                    {row.quantity}
                                                </TableCell>
                                                <TableCell>
                                                    {row.description}
                                                </TableCell>
                                                <TableCell>
                                                    <Tooltip title="Edit Product">
                                                        <IconButton
                                                            onClick={() =>
                                                                editProduct(
                                                                    index,
                                                                )
                                                            }
                                                        >
                                                            <EditIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete Product">
                                                        <IconButton
                                                            onClick={() =>
                                                                deleteProduct(
                                                                    index,
                                                                )
                                                            }
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={tableData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </>
    );
}
