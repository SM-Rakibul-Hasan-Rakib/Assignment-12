import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth/cordova";

const UpdateProfile = () => {
  const { UpdateProfile } = useContex(AuthContext);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const handleUpdateForm = (data) => {
    const name = data.fullName;
    const photo = data.photoUrl;
    updateProfile(name, photo)
      .then(() => {
        // toast.success("update success");
      })
      .catch((error) => {
        console.log(error);
        // show error message
      });
    setTimeout(() => {
      window.location.replace("/");
    }, 1000);
    console.log(name, photo);
  };

  return (
    <div>
      <div data-aos="fade-right">
        <div className="flex items-center mt-5 justify-center text-center dark:bg-gray-50 dark:text-gray-800">
          <form
            onSubmit={handleSubmit(handleUpdateForm)}
            noValidate=""
            action=""
            className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-800"
          >
            <label
              htmlFor="username"
              className="self-start text-xs font-semibold"
            >
              Username
            </label>
            <input
              {...register("fullName", { required: true })}
              type="text"
              className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
            />
            <label
              htmlFor="password"
              className="self-start mt-3 text-xs font-semibold"
            >
              PhotoUrl
            </label>
            <input
              {...register("photoUrl", { required: true })}
              type="text"
              className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
            />
            <button
              type="submit"
              className="btn btn-primary flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
            >
              Update
            </button>
          </form>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default UpdateProfile;
