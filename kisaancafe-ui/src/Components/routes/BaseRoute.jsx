import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../dashBoard/Dashboard'
import { connect } from 'react-redux'

const BaseRoute = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
    )
}

export default connect(null, null)(BaseRoute);
