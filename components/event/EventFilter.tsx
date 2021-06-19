import { FormEvent, useRef } from "react";
import { useRouter } from "next/router";
import styles from "./EventFilter.module.scss";

export default function EventFilter() {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);
  const router = useRouter();

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const yearValue = yearInputRef.current!.value;
    const monthValue = monthInputRef.current!.value;

    router.push(`/events/${yearValue}/${monthValue}`);
  };

  return (
    <form className={styles.filter} onSubmit={formSubmitHandler}>
      <div>
        <div>
          <label htmlFor="year">Year:</label>
          <div className={styles.customSelect}>
            <select id="year" ref={yearInputRef}>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
            <div className={styles.customArrow} />
          </div>
        </div>
        <div>
          <label htmlFor="month">Month:</label>
          <div className={styles.customSelect}>
            <select id="month" ref={monthInputRef}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <div className={styles.customArrow} />
          </div>
        </div>
        <button type="submit">Filter Events</button>
      </div>
    </form>
  );
}
