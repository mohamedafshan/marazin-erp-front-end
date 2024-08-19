import React, { useState, useEffect } from "react";
import { Table, Input, Button, Space, Popconfirm } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function TeacherDashboard() {
    const [warrantyData, setWarrantyData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/warranty-get-all")
            .then(response => {
                if (response.data.status === 200) {
                    const data = response.data.message.map((item, index) => ({
                        key: item.id,
                        no: index + 1,
                        name: item.name,
                        description: item.description,
                        duration: item.duration,
                        period: item.duration_type,
                    }));
                    setWarrantyData(data);
                }
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false); // Set loading to false even if there's an error
            });
    }, []);

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
    });

    const handleEdit = (id) => {
        // Handle edit functionality here
        console.log("Edit item with ID:", id);
    };

    const handleDelete = (id) => {
        // Handle delete functionality here
        console.log("Delete item with ID:", id);
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'no',
            key: 'no',
            sorter: (a, b) => a.no - b.no,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            sorter: (a, b) => a.description.localeCompare(b.description),
            ...getColumnSearchProps('description'),
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
            sorter: (a, b) => a.duration - b.duration,
            ...getColumnSearchProps('duration'),
        },
        {
            title: 'Period',
            dataIndex: 'period',
            key: 'period',
            sorter: (a, b) => a.period.localeCompare(b.period),
            ...getColumnSearchProps('period'),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={() => handleEdit(record.id)}>Edit</Button>
                    <Popconfirm
                        title="Are you sure to delete this item?"
                        onConfirm={() => handleDelete(record.id)}
                    >
                        <Button type="danger">Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-sub-header">
                                <h3 className="page-title">Warranties</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">Warranties</li>
                                    <li className="breadcrumb-item active">List Warranties</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-sm-12">
                            <div className="card card-table">
                                <div className="card-body">
                                    <div className="page-header">
                                        <div className="row align-items-center">
                                            <div className="col-auto text-end float-end ms-auto download-grp">
                                                <Link to="/add-warranty" className="btn btn-outline-info">
                                                    <i className="fas fa-plus px-2"></i>Add
                                                </Link>
                                                <Button className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#addAndEditWarrantyModal">
                                                    <i className="fas fa-plus px-2"></i>Add Data using Modal
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <Table 
                                            columns={columns} 
                                            dataSource={warrantyData} 
                                            pagination={{ pageSize: 5 }} 
                                            rowSelection={{ type: 'checkbox' }} 
                                            bordered 
                                            title={() => 'Warranty Data'} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherDashboard;
