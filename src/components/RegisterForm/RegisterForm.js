import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  
  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-60 border-2 p-5 mt-32">
        <label>Nombre completo</label>
        <input className="border-2 border-gray-500 row-span-2 h-12 mb-5" {...register("full_name", { required: true, maxLength: 200 })} placeholder="Nombre completo"/>

        <label>Número de teléfono</label>
        <input className="border-2 border-gray-500 row-span-2 h-12 mb-5" {...register("phone", { required: true, maxLength: 20 })} placeholder="Número de teléfono"/>

        <label>Dirección</label>
        <input className="border-2 border-gray-500 row-span-2 h-12 mb-5" {...register("address", { required: true, maxLength: 200 })} placeholder="Dirección"/>

        <label>Correo</label>
        <input className="border-2 border-gray-500 row-span-2 h-12 mb-5" type="email" {...register("email", { required: true, maxLength: 200 })} placeholder="Correo"/>

        <label>Contraseña</label>
        <input className="border-2 border-gray-500 row-span-2 h-12 mb-5" type="password" {...register("password", { required: true, maxLength: 200 })} placeholder="Contraseña"/>

        <input type="number" {...register("age", { min: 18, max: 99 })} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterForm;
