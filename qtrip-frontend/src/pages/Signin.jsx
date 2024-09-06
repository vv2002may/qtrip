import { useForm } from "react-hook-form";
import { ENDPOINT } from "../config/endpoint";
import axios from "axios";

export default function Signin() {
  const { register, handleSubmit } = useForm();

  async function handleForm(formData) {
    await axios
      .post(ENDPOINT + "/login", formData)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center m-[3%]">
      <p className="p-2 text-3xl rounded bg-sky-100 border-solid border-2 border-green-500 m-2 outline-none ">
        Welcome to QTrip!
      </p>
      <form
        className="flex flex-col items-center justify-cente m-[2%]"
        onSubmit={handleSubmit(handleForm)}
      >
        <input
          className="p-2 rounded bg-sky-200 border-solid border-2 border-sky-500 m-2 outline-none "
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <input
          className="p-2 rounded bg-sky-200 border-solid border-2 border-sky-500 m-2 outline-none "
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button
          className="p-2 rounded bg-sky-200 border-solid border-2 border-sky-500 m-2 outline-none "
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
