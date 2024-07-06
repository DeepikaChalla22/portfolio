import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminActivities() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { activities } = portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [type, setType] = React.useState("add");
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        try {
            const tempTechnologies = values?.technologies?.split(",") || [];
            values.technologies = tempTechnologies;
            dispatch(ShowLoading());
            let response;
            if (selectedItemForEdit) {
                response = await axios.post("/api/portfolio/update-activity", {
                    ...values,
                    _id: selectedItemForEdit._id,
                });
            } else {
                response = await axios.post("/api/portfolio/add-activity", values);
            }

            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
                form.resetFields();
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
            const response = await axios.post("/api/portfolio/delete-activity", {
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
                <button
                    className="bg-primary px-5 py-2 text-white"
                    onClick={() => {
                        setSelectedItemForEdit(null);
                        setShowAddEditModal(true);
                    }}
                >
                    Add Activity/Achievement
                </button>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1">
                {activities.map((activity) => (
                    <div className="shadow border p-5 border-gray-400 flex flex-col gap-5">
                        <h1 className="text-primary text-xl font-bold">{activity.title}</h1>
                        <hr />
                        <img src={activity.image} alt="" className="h-60 w-80 rounded" />

                        <h1>{activity.description}</h1>
                        <div className="flex justify-end gap-5 mt-5">
                            <button
                                className="bg-red-500 text-white px-5 py-2 "
                                onClick={() => {
                                    onDelete(activity);
                                }}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-primary text-white px-5 py-2"
                                onClick={() => {
                                    setSelectedItemForEdit(activity);
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
                <Modal
                    open={showAddEditModal}
                    title={selectedItemForEdit ? "Edit Activity" : "Add Activity"}
                    footer={null}
                    onCancel={() => {
                        setShowAddEditModal(false);
                        setSelectedItemForEdit(null);
                    }}
                >
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={
                            {
                                ...selectedItemForEdit,
                                technologies: selectedItemForEdit?.technologies?.join(" , "),
                            } || {}
                        }
                    >
                        <Form.Item name="title" label="Title">
                            <input placeholder="Title" />
                        </Form.Item>
                        <Form.Item name="image" label="Image URL">
                            <input placeholder="Image" />
                        </Form.Item>
                        <Form.Item name="description" label="Description">
                            <textarea placeholder="Description" />
                        </Form.Item>
                        <Form.Item name="link" label="Link">
                            <input placeholder="Link" />
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

export default AdminActivities;