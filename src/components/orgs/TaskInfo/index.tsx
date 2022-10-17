import clsx from "clsx";
import { HTMLAttributes } from "react";
import { Text } from "../../atoms";

import styles from "./styles.module.css";

interface TaskInfoProps extends HTMLAttributes<HTMLDivElement> {
  totalTasks: number;
  totalTasksDone: number;
}

export function TaskInfo({
  className,
  totalTasks,
  totalTasksDone,
  ...props
}: TaskInfoProps) {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      <div>
        <Text color="blue" fontWeight="bold">
          Tarefas criadas
        </Text>
        <span className={styles.counter}>{totalTasks}</span>
      </div>

      <div>
        <Text color="purple" fontWeight="bold">
          Concluídas
        </Text>
        <span className={styles.counter}>
          {totalTasks > 0
            ? `${totalTasksDone} de ${totalTasks}`
            : totalTasksDone}
        </span>
      </div>
    </div>
  );
}
