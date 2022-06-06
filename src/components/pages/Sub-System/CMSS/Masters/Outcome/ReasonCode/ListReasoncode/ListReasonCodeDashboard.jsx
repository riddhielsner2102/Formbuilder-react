import React, { useEffect, useState } from 'react'
import Navbar from '../../../../../../../ReusableComp/Navbar/Navbar';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';
import ListAddEdit from './ListAddEdit/ListAddEdit';

const ListReasonCodeDashboard = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props?.data)
    }, [props])

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
                data={data}
            />
            <Navbar
                titleIcon={<ViewDayOutlinedIcon />}
                title={data[0]?.ReasonCodeTitle}
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