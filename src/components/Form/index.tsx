import { FC, useContext } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import MatrixContext from "../../context/MatrixContext";
import createMatrix from "../../utils/сreateMatrix";

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
          className="input-field"
          type="number"
          {...register("n", { required: true, maxLength: 100, minLength: 0 })}
        />
      </label>
      <label>
        Adds M number
        <input
          className="input-field"
          type="number"
          {...register("m", { required: true, maxLength: 100, minLength: 0 })}
        />
      </label>
      <label>
        Adds X number
        <input
          className="input-field"
          type="number"
          {...register("x", { required: true })}
        />
      </label>
      <button className="submit-button" type="submit">
        Generate table
      </button>
    </form>
  );
};

export default Form;
