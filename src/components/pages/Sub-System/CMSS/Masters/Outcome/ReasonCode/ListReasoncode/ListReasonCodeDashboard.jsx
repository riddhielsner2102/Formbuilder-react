import React from 'react'
import Navbar from '../../../../../../../ReusableComp/Navbar/Navbar';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';

const ListReasonCodeDashboard = () => {
    return (
        <Navbar
            titleIcon={<ViewDayOutlinedIcon />}
            title="ReasonCodeTitle from Routing"
            buttonText="Add/Edit"
            searchbar={true}
            placeHolder='Search Reason code Option'
        />
    )
}

export default ListReasonCodeDashboard