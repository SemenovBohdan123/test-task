import { FC, useContext, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import MatrixContext from "../../context/MatrixContext";
import XContext from "../../context/XContext";

import createMatrix from "../../utils/сreateMatrix";

import "../Form/styles.css";

const Form: FC = () => {
  const { matrix, setMatrix } = useContext(MatrixContext);
  const { X, setX } = useContext(XContext);

  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ n, m, x }) => {
    if (n > 100 || n < 0 || m > 100 || m < 0 || x < 0 || x > Math.min(n, m)) {
      setError(true);
      return;
    }

    const newGenerateMatrix = createMatrix(n, m);

    setError(false);
    setX(x);
    setMatrix(newGenerateMatrix);
  };

  return (
    <div className="form_container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Adds N number (0 to 100 number)
          <input
            className="input-field"
            type="number"
            {...register("n", { required: true })}
          />
        </label>
        <label>
          Adds M number (0 to 100 number)
          <input
            className="input-field"
            type="number"
            {...register("m", { required: true })}
          />
        </label>
        <label>
          Adds X number (0 to {} number)
          <input
            className="input-field"
            type="number"
            {...register("x", { required: true })}
          />
        </label>
        <button className="submit-button" type="submit">
          Generate table
        </button>
        {error && <p className="error_message">Enter correct data</p>}
      </form>
    </div>
  );
};

export default Form;
