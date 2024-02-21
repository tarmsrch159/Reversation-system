import React, { useEffect, useState } from 'react'
import Header_start from '../Components/Header_start'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import axios from '../api/axios'
import { Modal } from 'antd'
import { FcHighPriority } from "react-icons/fc";
function Ad_Admin({ obtaine_msg }) {

    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    const [pwdCf, setPwdCf] = useState('')
    const [tel, setTel] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');


    const handleAdmin = async () => {
        if (username === '') {
            showAlert('กรุณาใส่ Username !!!');
            return;
        } else if (pwd === '') {
            showAlert('กรุณาใส่ Password !!!');
            return;
        } else if (pwdCf === '') {
            showAlert('กรุณายืนยัน Password !!!');
            return;
        }
        else if (tel === '') {
            showAlert('กรุณาใส่เบอร์โทรศัพท์ !!!');
            return;
        } else if (pwd !== pwdCf) {
            showAlert('Password ไม่ตรงกันกรุณาใส่ใหม่อีกครั้ง !!!');
            return;
        }

        await axios.post('/register_admin', {
            'username': username,
            'pwd': pwd,
            'tel': tel,
        }).then((res) => {
            try {
                if (res.data.status === 'ok') {
                    alert('ok successed')
                } else if (res.data.status === 'Username existed in database') {
                    alert('ชื่อผู้ใช้นี้มีในระบบแล้ว')
                }
            } catch (error) {
                alert('สาเหตุ:' + error)
                console.log(error)
            }

        })
    }

    const showAlert = (content) => {
        setModalContent(content);
        setIsModalVisible(true);
    };

    const showSuccessAlert = (title, content) => {
        Modal.success({
            title: title,
            content: content,
            onOk: () => {
                // Handle any additional actions after the user clicks OK
            },
        });
    };

    const handleModalOk = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            < Header_start />
            < Header obtaine_msg={obtaine_msg} />
            < Sidebar />
            <div className="content-body">
                <div className="container-fluid mt-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="form-validation">
                                <form
                                    className="form-valide"
                                    // action="#"
                                    // method="post"
                                    noValidate="novalidate"
                                >
                                    <div className="form-group row is-invalid">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-username">
                                            Username <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="val-username"
                                                name="val-username"
                                                placeholder="กรุณาใส่ Username"
                                                aria-required="true"
                                                aria-describedby="val-username-error"
                                                aria-invalid="true"
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                            <div
                                                id="val-username-error"
                                                className="invalid-feedback animated fadeInDown"
                                                style={{ display: "block" }}
                                            >
                                                กรุณาใส่ Username
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row is-invalid">
                                        <label className="col-lg-4 col-form-label" htmlFor="val-password">
                                            Password <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="val-password"
                                                name="val-password"
                                                placeholder="กรุณาใส่ Password"
                                                aria-required="true"
                                                aria-describedby="val-password-error"
                                                onChange={(e) => setPwd(e.target.value)}
                                            />
                                            <div
                                                id="val-password-error"
                                                className="invalid-feedback animated fadeInDown"
                                                style={{ display: "block" }}
                                            >
                                                กรุณาใส่ Password
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row is-invalid">
                                        <label
                                            className="col-lg-4 col-form-label"
                                            htmlFor="val-confirm-password"
                                        >
                                            Confirm Password <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="val-confirm-password"
                                                name="val-confirm-password"
                                                placeholder="กรุณาใส่ Password อีกครั้ง"
                                                aria-required="true"
                                                aria-describedby="val-confirm-password-error"
                                                onChange={(e) => setPwdCf(e.target.value)}
                                            />
                                            <div
                                                id="val-confirm-password-error"
                                                className="invalid-feedback animated fadeInDown"
                                                style={{ display: "block" }}
                                            >
                                                กรุณาใส่ Password
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row is-invalid">
                                        <label
                                            className="col-lg-4 col-form-label"
                                            htmlFor="val-tel"
                                        >
                                            เบอร์โทร <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="val-tel"
                                                name="val-tel"
                                                placeholder="กรุณาใส่ เบอร์โทรศัพท์"
                                                aria-required="true"
                                                aria-describedby="val-confirm-password-error"
                                                onChange={(e) => setTel(e.target.value)}
                                            />
                                            <div
                                                id="val-confirm-password-error"
                                                className="invalid-feedback animated fadeInDown"
                                                style={{ display: "block" }}
                                            >
                                                กรุณาใส่เบอร์โทรศัพท์
                                            </div>
                                        </div>
                                    </div>


                                </form>
                                <div className="form-group row">
                                    <div className="col-lg-8 ml-auto">
                                        <button className="btn btn-primary" onClick={handleAdmin}>
                                            ยืนยัน
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal
                        title={<div >พบข้อผิดพลาด</div>}
                        visible={isModalVisible}
                        onOk={handleModalOk}
                        onCancel={handleModalOk}
                        bodyStyle={{ fontFamily: 'Sarabun',height: '200px', overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <FcHighPriority size={100}/>
                        <br />
                        <h4 style={{ color: '#F39C12', textAlign: 'center' }}>{modalContent}</h4>
                    </Modal>
                </div>
            </div>

        </>

    )
}

export default Ad_Admin