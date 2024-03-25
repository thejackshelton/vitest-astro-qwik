import { $, component$, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal(70);

  const setCount = $((newValue: number) => {
    if (newValue < 0 || newValue > 100) {
      return;
    }
    count.value = newValue;
  });

  return (
    <div>
      <button
        class="button-dark button-small"
        onClick$={() => setCount(count.value - 1)}
      >
        -
      </button>
      <div class="count">{count.value}</div>
      <button
        class="button-dark button-small"
        onClick$={() => setCount(count.value + 1)}
      >
        +
      </button>
    </div>
  );
});
