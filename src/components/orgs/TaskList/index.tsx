import clsx from "clsx";
import {
  Children,
  HTMLAttributes,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from "react";
import { Text } from "../../atoms";
import { ClipboardIcon, TaskProps } from "../../molecules";
import styles from "./styles.module.css";

interface TaskListProps
  extends Omit<HTMLAttributes<HTMLUListElement>, "children"> {
  children: ReactElement<TaskProps, JSXElementConstructor<TaskProps>>[];
}

export function TaskList({ children, className, ...props }: TaskListProps) {
  // Empty list
  if (Children.count(children) === 0) {
    return (
      <div className={clsx(styles.containerEmpty, className)}>
        <ClipboardIcon />
        <Text fontSize="lg" fontWeight="bold">
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text fontSize="lg">Crie tarefas e organize seus itens a fazer</Text>
      </div>
    );
  }

  return (
    <ul className={clsx(styles.containerList, className)} {...props}>
      {Children.map(children, (child) => (
        <li key={child.key}>{child}</li>
      ))}
    </ul>
  );
}
