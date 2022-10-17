import clsx from "clsx";
import { Text } from "../../atoms";
import { CheckIcon } from "../CheckIcon";
import { TrashIcon } from "../TrashIcon";
import styles from "./styles.module.css";

export interface TaskProps {
  id: number;
  task: string;
  isDone?: boolean;
  onToggleTask(id: number): void;
  onTaskDelete(id: number): void;
}

export function Task({
  id,
  task,
  isDone,
  onToggleTask,
  onTaskDelete,
}: TaskProps) {
  return (
    <article className={clsx(styles.container, isDone && styles.isTaskDone)}>
      <button
        aria-label="Marcar tarefa como concluída"
        className={clsx(styles.checkbox, isDone && styles.checked)}
        onClick={() => onToggleTask(id)}
      >
        {isDone && <CheckIcon />}
      </button>
      <Text color={isDone ? "gray.300" : "gray.100"}>{task}</Text>
      <button
        aria-label="Remover tarefa"
        className={styles.removeButton}
        onClick={() => onTaskDelete(id)}
      >
        <TrashIcon />
      </button>
    </article>
  );
}
