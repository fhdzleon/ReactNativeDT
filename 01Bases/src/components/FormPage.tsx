import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

const FormPage = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: "felipe@mail.com",
      password: "123456",
    },
  });

  const onSubmit = (myForm: FormInputs) => {
    console.log({ myForm });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Formulario</h3>

      <div className="flex flex-col space-y-3 w-[500px]">
        <input
          type="email"
          placeholder="email"
          className="border border-gray-200 p-2 rounded-xl"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="password"
          className="border border-gray-200 p-2 rounded-xl"
          {...register("password", { required: true })}
        />

        <button type="submit" className="bg-blue-500 rounded-xl text-white p-2">
          Ingresar
        </button>
      </div>
    </form>
  );
};

export default FormPage;
