import clsx from "clsx";
import {
  ChangeEventHandler,
  FormEventHandler,
  FormHTMLAttributes,
  useState,
} from "react";
import { Button, Input } from "../../atoms";
import styles from "./styles.module.css";

interface FormNewTaskProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  onSubmit(data: { newTask: string }): void;
}

export function FormNewTask({
  className,
  onSubmit,
  ...props
}: FormNewTaskProps) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit: FormEventHandler = (evt) => {
    evt.preventDefault();

    if (newTask.length) {
      onSubmit({ newTask });
      setNewTask("");
    }
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setNewTask(evt.target.value);
  };

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <form
      className={clsx(styles.container, className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <Input value={newTask} onChange={handleInputChange} />
      <Button disabled={isNewTaskEmpty}>
        <Button.Text>Criar</Button.Text>
      </Button>
    </form>
  );
}
