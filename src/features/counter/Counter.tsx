import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  selectCount1,
  selectCount2,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

const Counter1 = () => {
  const dispatch = useAppDispatch();
  const count1 = useAppSelector(selectCount1);

  return (
    <div className={styles.row}>
      <span>COUNT1</span>
      <button
        className={styles.button}
        aria-label="Decrement value"
        onClick={() => dispatch(decrement("count_1"))}
      >
        -
      </button>
      <span className={styles.value}>{count1}</span>
      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={() => dispatch(increment("count_1"))}
      >
        +
      </button>
    </div>
  );
};

const Counter2 = () => {
  const dispatch = useAppDispatch();
  const count1 = useAppSelector(selectCount2);

  return (
    <div className={styles.row}>
      <span>COUNT2</span>
      <button
        className={styles.button}
        aria-label="Decrement value"
        onClick={() => dispatch(decrement("count_2"))}
      >
        -
      </button>
      <span className={styles.value}>{count1}</span>
      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={() => dispatch(increment("count_2"))}
      >
        +
      </button>
    </div>
  );
};
