import ThemeSwitcher from "@/components/ThemeSwitcher";
import logoUrl from "@/assets/images/logo.svg";
import illustrationUrl from "@/assets/images/illustration.svg";
import { FormInput, FormCheck } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import clsx from "clsx";
import * as yup from "yup";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/stores/usersApiSlice";
import { setCredentials } from "@/stores/authSlice";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { useForm } from "react-hook-form";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { handleApiResponse } from "@/utils/helper";

const schema = yup
  .object({
    email: yup.string().email().required().label("Email"),
    password: yup.string().required().label("Password"),
  })
  .required();

function Main() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useAppSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const onSubmit = async (data: any) => {
    const res = await login(data);
    handleApiResponse(
      res,
      (data) => {
        dispatch(setCredentials(data));
        navigate(redirect);
      },
      (error) => {
        toast.error(error);
      }
    );
  };

  return (
    <>
      <div
        className={clsx([
          "p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600",
          "before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400",
          "after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700",
        ])}
      >
        <ThemeSwitcher />
        <div className="container relative z-10 sm:px-10">
          <div className="block grid-cols-2 gap-4 xl:grid">
            {/* BEGIN: Login Info */}
            <div className="flex-col hidden min-h-screen xl:flex">
              <a href="" className="flex items-center pt-5 -intro-x">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="w-6"
                  src={logoUrl}
                />
                <span className="ml-3 text-lg text-white"> LRMS </span>
              </a>
              <div className="my-auto">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="w-1/2 -mt-16 -intro-x"
                  src={illustrationUrl}
                />
                <div className="mt-10 text-4xl font-medium leading-tight text-white -intro-x">
                  Welcome to LRMS <br />
                  Land Recors Management System.
                </div>
                <div className="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400">
                  Plot Management | Dashboard | Geospatial | Land Records
                </div>
              </div>
            </div>
            {/* END: Login Info */}
            {/* BEGIN: Login Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="xl:flex items-center"
            >
              <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
                <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                  <div className="absolute right-[50px] top-[25px]">
                    <img
                      className="w-[200px]"
                      alt="Company Logo"
                      src="https://esl.highlandenergynig.com/public/theams/assets/images/logo/esl-logo-main.png"
                    ></img>
                  </div>
                  <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
                    Sign In
                  </h2>
                  <div className="mt-8 intro-x">
                    <FormInput
                      type="text"
                      className="block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email address is required",
                      })}
                    />
                    {errors.email && (
                      <p className="text-danger mt-2">{errors.email.message}</p>
                    )}
                    <FormInput
                      type="password"
                      className="block px-4 py-3 mt-4 intro-x min-w-full xl:min-w-[350px]"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && (
                      <p className="text-danger mt-2">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
                    <div className="flex items-center mr-auto">
                      <FormCheck.Input
                        id="remember-me"
                        type="checkbox"
                        className="mr-2 border"
                      />
                      <label
                        className="cursor-pointer select-none"
                        htmlFor="remember-me"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="">Forgot Password?</a>
                  </div>
                  <div className="mt-5 text-center intro-x xl:mt-8">
                    <Button
                      variant="primary"
                      disabled={isLoading}
                      className="w-full px-4 py-3 align-top xl:w-32 xl:mr-3"
                    >
                      Login
                      {isLoading && (
                        <LoadingIcon
                          icon="oval"
                          color="white"
                          className="w-4 h-4 ml-2"
                        />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
            {/* END: Login Form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
