import { onMount, createSignal, createMemo } from "solid-js";
import type { Component } from "solid-js";

const updateString = (time: number): string =>
  time < 9 ? `0${time as unknown as string}` : (time as unknown as string);

const App: Component = () => {
  const [time, setTime] = createSignal<Date>(new Date());

  const hour = createMemo<String>(() => updateString(time().getHours()));
  const minute = createMemo<String>(() => updateString(time().getMinutes()));
  const second = createMemo<String>(() => updateString(time().getSeconds()));

  onMount(() => {
    function updateTime() {
      setTime(new Date());
      window.requestAnimationFrame(updateTime);
    }

    updateTime();
  });

  return (
    <div>
      {hour()}:{minute()}:{second()}
    </div>
  );
};

export default App;
