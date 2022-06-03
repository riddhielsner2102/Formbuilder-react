import React, { useState } from 'react'
import Navbar from '../../../../../../../ReusableComp/Navbar/Navbar';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';
import ListAddEdit from './ListAddEdit/ListAddEdit';

const ListReasonCodeDashboard = () => {
    const [flagAddEdit, setFlagAddEdit] = useState(false)
    const closeNewModal = () => {
        setFlagAddEdit(false)
    };
    const showNewModal = () => {
        setFlagAddEdit(true)
    };

    return (
        <>
            <ListAddEdit
                show={flagAddEdit}
                modalClosed={() => {
                    closeNewModal();
                }}
            />
            <Navbar
                titleIcon={<ViewDayOutlinedIcon />}
                title="ReasonCodeTitle from Routing"
                buttonText="Add/Edit"
                onClick={() => {
                    showNewModal();
                }}
                searchbar={true}
                placeHolder='Search Reason code Option'
            />
        </>
    )
}

export default ListReasonCodeDashboard