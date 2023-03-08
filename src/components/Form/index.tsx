import { FC, useContext } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import MatrixContext from "../../context/MatrixContext";
import createMatrix from "../../utils/CreateMatrix";

import "../Form/styles.css";

const Form: FC = () => {
  const { matrix, setMatrix } = useContext(MatrixContext);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ n, m, x }) => {
    const newGenerateMatrix = createMatrix(n, m);

    setMatrix(newGenerateMatrix);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Adds N number
        <input
          type="number"
          {...register("n", { required: true, maxLength: 100, minLength: 0 })}
        />
      </label>
      <label>
        Adds M number
        <input
          type="number"
          {...register("m", { required: true, maxLength: 100, minLength: 0 })}
        />
      </label>
      <label>
        Adds X number
        <input type="number" {...register("x", { required: true })} />
      </label>
      <input defaultValue="generate a new table" type="submit" />
    </form>
  );
};

export default Form;
