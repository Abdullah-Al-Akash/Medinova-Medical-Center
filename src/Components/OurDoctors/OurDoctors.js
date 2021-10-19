import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const OurDoctors = () => {
        const [doctors, setDoctors] = useState();

        // Fetch Doctors Data From FakeData:
        useEffect(() => {
                fetch('./doctors.json')
                        .then(res => res.json())
                        .then(data => setDoctors(data))
        }, [])
        return (
                <div className="container mt-5 pt-5">
                        <h6 className="brand-color fw-bold text-center text-decoration-underline">OUR TEAM OF HIGHLY TRAINED DOCTORS</h6>
                        <h3 className="text-center w-75 mx-auto pt-3 fw-bold">“ We are Proud to have a Team of Dedicated Doctors with varying interests and background ”</h3>
                        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                                {
                                        doctors?.map(doctor => <Doctor
                                                key={doctor.id}
                                                doctor={doctor}
                                        >

                                        </Doctor>)
                                }
                        </div>

                </div>
        );
};

export default OurDoctors;