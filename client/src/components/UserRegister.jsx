import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const schema = z.object({
  name: z.string().min(5, 'Name is required and must be at least 5 characters'),
  dob: z.string({ message: 'Invalid date format. Use mm-dd-yyyy' }),
  email: z.string().email({ message: 'Invalid email address' }),
  contact: z.string().min(10, 'Contact number must be at least 10 digits'),
  description: z.string().min(1, 'Description is required'),
});

const UserRegister = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form submitted")
    const res = await axios.post('http://localhost:8080/api/v1/users/adduser', data);
      console.log(res.data);

  };

  return (
    <div className="flex justify-center">
      <div className="card max-w-screen-md w-full shadow-3xl bg-base-100">
        <div className="card-body card-bordered border-base-300 rounded-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Name</span>
                {errors.name && <p className={"px-5 "}>{errors.name.message}</p>}
              </label>
              <input {...register('name')} type="text" placeholder="Name"
                className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Date of Birth (Ymm--dd--yyyy)</span>
                {errors.dob && <p className={"px-5"}>{errors.dob.message}</p>}
              </label>
              <input {...register('dob')} type="date" placeholder="YYYY-MM-DD"
                className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Email</span>
                {errors.email && <p className={"px-5"}>{errors.email.message}</p>}
              </label>
              <input {...register('email')} type="email" placeholder="Email"
                className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Contact Number</span>
                {errors.contact && <p className={"px-5"}>{errors.contact.message}</p>}
              </label>
              <input {...register('contact')} type="number" placeholder="Contact Number"
                className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Description</span>
                {errors.description && <p className={"px-5"}>{errors.description.message}</p>}
              </label>
              <textarea {...register('description')} className="textarea textarea-bordered"
                placeholder="Description"></textarea>

            </div>
            <div className="form-control mt-6">
                            <button className="btn btn-outline" type={"submit"}>Create Product</button>
                        </div>
            </form>
            </div>
            </div>
            </div>
            )}
            export default UserRegister;