import React, { useState } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { TextField, Grid, Box, Typography, Modal, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

type Props = {}


const Profile = (props: Props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
    }
    return (
        <DashboardLayout>
            <section className="profile-section about-section gray-bg position-relative" >
                <div className="container-fluid">
                    <div className="row align-items-center ">
                        {/* <div className="col-3 profile-img">
                            <div className="about-avatar">
                                <img className='img-fluid' src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Profile_Image" />
                            </div>
                        </div> */}
                        <div className="col-md-9">
                            <div className="about-text go-to">
                                <h3 className="text-light profile-text">Profile User Name</h3>
                                <h6 className="lead text-light">Designation Details!</h6>
                                <p className='text-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam officia vitae eos, pariatur facere, mollitia error iure doloremque consequatur quam, debitis sapiente et tempora excepturi.</p>
                                <div className="row about-list w-100 pl-3">
                                    <div className="media col-md-6">
                                        <label>Email</label>
                                        <p>User@mail.com</p>
                                    </div>
                                    <div className="media col-md-6">
                                        <label>Phone #</label>
                                        <p>+1-000-000-0000</p>
                                    </div>
                                    <div className="media col-md-6">
                                        <label>Linked In</label>
                                        <p>@UserName</p>
                                    </div>
                                    <div className="media col-md-6">
                                        <label>Skype</label>
                                        <p>@UserName</p>
                                    </div>
                                    <div className="media col-md-6">
                                        <label>Git Hub</label>
                                        <p>@UserName</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* user details edit info  */}
                        <div className="userEdit-info">
                            <Button onClick={handleOpen} className='user-edit-info'>Update Info <EditIcon /></Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style} component="form" onSubmit={handleSubmit}>
                                    <h3 className="text-dark text-center">Update User Info</h3>
                                    <TextField
                                        id="outlined-textarea"
                                        label="Full Name"
                                        placeholder="Full Name"
                                        size="small"
                                        className='my-2 w-100'
                                    />
                                    <TextField
                                        id="outlined-textarea"
                                        label="Email Address "
                                        placeholder="Email Address"
                                        size="small"
                                        className='my-2 w-100'
                                    />
                                    <TextField
                                        id="outlined-textarea"
                                        label="Phone Number "
                                        placeholder="Phone Number"
                                        size="small"
                                        className='my-2 w-100'
                                    />
                                    <TextField
                                        id="outlined-textarea"
                                        label="Linked In "
                                        placeholder="Linked In"
                                        size="small"
                                        className='my-2 w-100'
                                    />
                                    <TextField
                                        id="outlined-textarea"
                                        label="Portfolio "
                                        placeholder="Portfolio"
                                        size="small"
                                        className='my-2 w-100'
                                    />
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="About me"
                                        placeholder='Write something about me!'
                                        multiline
                                        rows={3}
                                        defaultValue=""
                                        className='my-2 w-100'
                                    />
                                    <button type="submit" className="btn-own w-100">Update User</button>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                    {/* edit fourm all  */}
                    {/* <div className="update_fourm_data">
                        <Grid >
                            <Box component="form">
                                <TextField id="outlined-basic" label="Email Address" variant="filled" fullWidth />
                            </Box>
                        </Grid>
                    </div> */}
                </div>
            </section>
        </DashboardLayout >
    )
}

export default Profile