import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
        const [services, setServices] = useState([]);

        // Load Data From JSON File:
        useEffect(() => {
                fetch('./services.json')
                        .then(res => res.json())
                        .then(data => setServices(data));
        }, [])
        return (
                <div className="container mt-5 pt-5 pb-5">
                        <div className="text-center">
                                <h4 className="brand-color">What We Offer</h4>
                                <h2>Healing for a better world.</h2>
                                {/* Show Services by Mapping */}
                                <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
                                        {
                                                services.map(service => <Service
                                                        key={service.id}
                                                        service={service}
                                                >

                                                </Service>)
                                        }
                                </div>
                        </div>

                </div>
        );
};

export default Services;