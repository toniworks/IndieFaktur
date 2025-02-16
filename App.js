# IndieFaktur Frontend (React)

import React, { useState, useEffect } from 'react';

function App() {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/invoices")
            .then(response => response.json())
            .then(data => setInvoices(data));
    }, []);

    return (
        <div>
            <h1>IndieFaktur Invoices</h1>
            <ul>
                {invoices.map(invoice => (
                    <li key={invoice.id}>{invoice.customer} - ${invoice.amount} - {invoice.status}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
