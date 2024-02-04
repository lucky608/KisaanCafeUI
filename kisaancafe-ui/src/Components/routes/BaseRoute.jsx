import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../dashBoard/Dashboard'
import { connect } from 'react-redux'
import CartContainer from '../Cart/CartContainer'

const BaseRoute = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/cart" element={<CartContainer />} />
        </Routes>
    )
}

export default connect(null, null)(BaseRoute);
