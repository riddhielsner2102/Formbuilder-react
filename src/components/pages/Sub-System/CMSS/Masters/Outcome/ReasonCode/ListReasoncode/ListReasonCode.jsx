import React from 'react'
import ListItems from './ListItems/ListItems'
import ListReasonCodeDashboard from './ListReasonCodeDashboard'
import { useLocation } from 'react-router-dom'

const ListReasonCode = () => {
    const { state } = useLocation()

    return (
        <>
            <ListReasonCodeDashboard data={state} />
            <ListItems data={state} />
        </>
    )
}

export default ListReasonCode