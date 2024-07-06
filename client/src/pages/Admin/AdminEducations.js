import { Form, Modal, message } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import axios from 'axios';

function AdminEducations() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { educations } = portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [type, setType] = React.useState("add");



    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            let response;
            if (selectedItemForEdit) {
                response = await axios.post("/api/portfolio/update-education", {
                    ...values,
                    _id: selectedItemForEdit._id,
                });
            } else {
                response = await axios.post("/api/portfolio/add-education", values);
            }

            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }

    };

    const onDelete = async (item) => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post("/api/portfolio/delete-education", {
                _id: item._id,
            });
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };


    return (
        <div>
            <div className="flex justify-end">
                <button className='bg-primary px-5 py-2 text-white'
                    onClick={() => {
                        setSelectedItemForEdit(null);
                        setShowAddEditModal(true);
                    }}>
                    Add Education
                </button>

            </div>
            <div className='grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1'>
                {educations.map((education) => (
                    <div className='shadow border p-5 border-gray-400 flex flex-col'>
                        <h1 className="text-primary text-xl font-bold">
                            {education.period}
                        </h1>
                        <hr />
                        <h1>GPA : {education.gpa}</h1>
                        <h1>School : {education.school}</h1>
                        <h1>{education.description}</h1>
                        <div className="flex justify-end gap-5 mt-5">
                            <button
                                className="bg-red-500 text-white px-5 py-2 "
                                onClick={() => {
                                    onDelete(education);
                                }}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-primary text-white px-5 py-2"
                                onClick={() => {
                                    setSelectedItemForEdit(education);
                                    setShowAddEditModal(true);
                                    setType("edit");
                                }}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {(type === "add" || selectedItemForEdit) && (
                <Modal open={showAddEditModal}
                    title={selectedItemForEdit ? "Edit Education" : "Add Education"}
                    footer={null}
                    onCancel={() => {
                        setShowAddEditModal(false);
                        setSelectedItemForEdit(null);
                    }}>

                    <Form layout='vertical' onFinish={onFinish}
                        initialValues={selectedItemForEdit || {}}>
                        <Form.Item name="period" label="Period">
                            <input placeholder="Period" />
                        </Form.Item>
                        <Form.Item name="gpa" label="GPA">
                            <input placeholder="GPA" />
                        </Form.Item>
                        <Form.Item name="school" label="School">
                            <input placeholder="School/College" />
                        </Form.Item>
                        <Form.Item name="description" label="Description">
                            <input placeholder="Description" />
                        </Form.Item>
                        <div className="flex justify-end">
                            <button
                                className="border-primary text-primary px-5 py-2"
                                onClick={() => {
                                    setShowAddEditModal(false);
                                    setSelectedItemForEdit(null);
                                }}
                            >
                                Cancel
                            </button>
                            <button className="bg-primary text-white px-5 py-2">
                                {selectedItemForEdit ? "Update" : "Add"}
                            </button>
                        </div>
                    </Form>

                </Modal>
            )}

        </div>
    );
}

export default AdminEducations
