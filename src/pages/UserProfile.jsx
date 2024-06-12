import React, { useEffect, useState } from "react";
import userData from "../service/data";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../ui";
import { Input } from "../ui";
import { useNavigate } from "react-router-dom";
import {
  editeUserProfileFailure,
  editeUserProfileStart,
  editeUserProfileSuccess,
  signUserSuccess,
  logOut,
} from "../slice/auth";
import { removeItem } from "../helpers/persistence-storage";

function UserProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoad, user, editeLoad } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const logoutHandler = () => {
    dispatch(logOut());
    removeItem("token");
    navigate("/login");
  };

  const getUser = async () => {
    try {
      const { user } = await userData.getData("user");
      dispatch(signUserSuccess(user));
    } catch (error) {
      dispatch(signUserFailure(error));
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    dispatch(editeUserProfileStart());
    try {
      const newProfile = { username: name, bio };
      await userData.editeUserProfile("user", newProfile);
      dispatch(editeUserProfileSuccess());
      navigate(`/profile/${name}`);
      getUser();
    } catch (error) {
      console.log(error);
      dispatch(editeUserProfileFailure());
    }
  };

  return (
    <>
      {user !== null && (
        <div className="container">
          {!isLoad ? (
            <div className="userprofile__contnet">
              <div className="user__image">
                {user.image ? (
                  <img
                    loading="lazy"
                    width={50}
                    height={50}
                    src={user.image}
                    alt={`user ${user.username} image`}
                  />
                ) : (
                  <h3>{user.username.slice(0, 1)}</h3>
                )}
              </div>

              <h1 className="user__name">name: {user.username}</h1>
              <p>bio: {user.bio ? user.bio : "none"}</p>

              <form action="#" onSubmit={formSubmit}>
                <Input
                  label={"Name"}
                  elId={"user-name"}
                  state={name}
                  setState={setName}
                />
                <Input
                  label={"Bio"}
                  elId={"user-bio"}
                  state={bio}
                  setState={setBio}
                />
                <div className="user__btns">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2"
                    disabled={editeLoad}
                  >
                    {editeLoad ? "Loading..." : "Edite profile"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger user-btn w-100 py-2"
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      )}
    </>
  );
}

export default UserProfile;
