import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Header_start from '../Components/Header_start'
import Sidebar from '../Components/Sidebar'
import axios from '../api/axios'
import { writeFile } from 'xlsx';
import * as XLSX from 'xlsx';
import { format } from 'date-fns';
function UsingMeetingRoom({ obtaine_msg }) {

    const [dataBookRoom, setDataBookRoom] = useState([])
    let count = 1
    useEffect(() => {
        try {
            axios.get('/using_meeting_room').then((res) => {
                setDataBookRoom(res.data)
            })
        } catch (error) {
            alert(error)
        }
    }, [])


    const data = dataBookRoom.map((res, index) => {
        const fullName = res.name + ' ' + res.lastname
        const formatStartTime = format(new Date(res.startTime), 'dd/MM/yyyy HH:mm:ss');
        const formatEndTime = format(new Date(res.endTime), 'dd/MM/yyyy HH:mm:ss');

        return {
            "ลำดับ": index + 1,
            "หัวข้อการประชุม": res.event,
            "ห้อง": res.room_name,
            "ชื่อ-นามสกุล": fullName,
            "เริ่มการประชุม": formatStartTime,
            "จบการประชุม": formatEndTime,
        }
    })



    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, 'data.xlsx');
    };
    return (
        <div>
            < Header_start />
            < Header obtaine_msg={obtaine_msg} />
            < Sidebar />
            <div className="content-body">
                <div className='container-fluid'>
                    <div className="row justify-content-center">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <div className="row d-flex justify-content-between">
                                    <h3 className='ml-3'>การใช้ห้องประชุม</h3>
                                    <button className='btn btn-success' onClick={exportToExcel}>ออกรายงาน</button>

                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover mx-auto">
                                        <thead>
                                            <tr>
                                                <th>ลำดับ</th>
                                                <th>หัวข้อการประชุม</th>
                                                <th>ห้อง</th>
                                                <th>ชื่อ-นามสกุล</th>
                                                <th>เริ่มการประชุม</th>
                                                <th>จบการประชุม</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataBookRoom.map((items, index) => {

                                                const formatStartTime = format(new Date(items.startTime), 'dd/MM/yyyy HH:mm:ss');
                                                const formatEndTime = format(new Date(items.endTime), 'dd/MM/yyyy HH:mm:ss');
                                                return (
                                                    <tr key={index}>
                                                        <th>{count++}</th>
                                                        <td>{items.event}</td>
                                                        <td>{items.room_name}</td>
                                                        <td>{items.name} {items.lastname} {items.department}</td>
                                                        <td>{formatStartTime}</td>
                                                        <td>{formatEndTime}</td>
                                                    </tr>
                                                )
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        {/* <div className="col-sm-6">
                            asd
                        </div>
                        <div className="col-sm-6">
                            
                        </div> */}

                    </div>

                </div>
            </div>

        </div>
    )
}

export default UsingMeetingRoom