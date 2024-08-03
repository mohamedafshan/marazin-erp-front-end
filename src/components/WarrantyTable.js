// WarrantyTable.js
import React, { useEffect, useState,useMemo } from "react";
import axios from "axios";
import { useTable } from "react-table";
import Loading from "../components/Loading.js";

const WarrantyTable = () => {
    const [loading, setLoading] = useState(true);
    const [warranty, setWarranty] = useState([]);

    const fetchWarrantyData = () => {
        setLoading(true);
        axios
            .get("http://127.0.0.1:8000/api/warranty-get-all")
            .then((res) => {
                console.log(res);
                setWarranty(res.data.message);
                setLoading(false);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchWarrantyData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    const deleteWarranty = (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = 'Deleting...';

        axios
            .delete(`http://127.0.0.1:8000/api/warranty-delete/${id}`)
            .then((res) => {
                alert('Successfully deleted');
                setWarranty((prevWarranties) => prevWarranties.filter((item) => item.id !== id));
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 404) {
                        alert("Error: " + error.response.data.message);
                    } else {
                        alert("An error occurred. Please try again.");
                    }
                } else {
                    console.error("Error:", error);
                    alert("An unexpected error occurred.");
                }
            });
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Duration',
                accessor: 'duration',
            },
            {
                Header: 'Period',
                accessor: 'duration_type',
            },
            {
                Header: 'Action',
                Cell: ({ row }) => (
                    <button
                        type="button"
                        onClick={(e) => deleteWarranty(e, row.original.id)}
                        className="btn btn-danger"
                    >
                        Delete
                    </button>
                ),
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: warranty });

    return (
        <div className="table-responsive">
            <table {...getTableProps()} className="table table-striped" style={{ width: "100%" }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default WarrantyTable;
