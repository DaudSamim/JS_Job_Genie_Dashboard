import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import { TextField, Grid, Box } from "@mui/material";
import Cookies from "js-cookie";

type Props = {};

const Profile = (props: Props) => {
  const [userProfile, setUserProfile] = useState<any>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUserProfile = async () => {
    const cookieKey = process.env.REACT_APP_AUTH_COOKIE;
    const authTokken = Cookies.get(cookieKey || "nothing");

    const dataSnap = await fetch("/api/getProfile", {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        authTokken,
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const { data } = await dataSnap.json();

    setUserProfile(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <DashboardLayout>
      {!loading ? (
        <section className="profile-section about-section gray-bg position-relative">
          <div className="container-fluid">
            <div className="row align-items-center ">
              {/* <div className="col-3 profile-img">
                                <div className="about-avatar">
                                    <img className='img-fluid' src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Profile_Image" />
                                </div>
                            </div> */}
              {userProfile && (
                <div className="col-md-9">
                  <div className="about-text go-to">
                    <h3 className="text-light profile-text">
                      {userProfile?.fullName}
                    </h3>
                    <h6 className="lead text-light">
                      {userProfile?.profession}
                    </h6>
                    <p className="text-light">{userProfile?.about}</p>
                    <div className="row about-list w-100 pl-3">
                      <div className="media col-md-6">
                        <label>Email</label>
                        <p>{userProfile?.email}</p>
                      </div>
                      <div className="media col-md-6">
                        <label>Phone #</label>
                        <p>{userProfile?.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
      ) : (
        <h2>Loading ! ...</h2>
      )}
    </DashboardLayout>
  );
};

export default Profile;
