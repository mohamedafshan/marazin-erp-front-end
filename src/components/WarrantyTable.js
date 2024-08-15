import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useTable } from "react-table";
import Loading from "../components/Loading.js";

const WarrantyTable = () => {
    const [loading, setLoading] = useState(true);
    const [warranty, setWarranty] = useState([]);

    const fetchWarrantyData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/warranty-get-all");
            setWarranty(res.data.message); // Assuming res.data.message is an array of warranties
            setLoading(false);
        } catch (error) {
            console.error("There was an error fetching the data!", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWarrantyData();
    }, []);

    const deleteWarranty = async (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = 'Deleting...';

        try {
            await axios.delete(`http://127.0.0.1:8000/api/warranty-delete/${id}`);
            alert('Successfully deleted');
            setWarranty((prevWarranties) => prevWarranties.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error:", error);
            if (error.response && error.response.status === 404) {
                alert("Error: " + error.response.data.message);
            } else {
                alert("An error occurred. Please try again.");
            }
        } finally {
            thisClicked.innerText = 'Delete';
        }
    };

    const columns = useMemo(
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
                accessor: 'duration_type', // Ensure this matches your API's response key
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

    if (loading) {
        return <Loading />;
    }

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
