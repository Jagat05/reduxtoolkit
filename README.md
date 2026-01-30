#  Full Redux Toolkit Setup — Next.js (App Router + TypeScript)

This repository demonstrates a **complete, clean, and production-ready setup of Redux Toolkit in a Next.js App Router project using TypeScript**. It is intended for learning, practice, and reference for modern Redux architecture.

---

##  Tech Stack

* Next.js (App Router)
* React
* Redux Toolkit
* React Redux
* TypeScript

---

##  Purpose of This Repository

* Learn modern Redux Toolkit setup
* Practice slices, reducers, store, and provider
* Understand global state management
* Build scalable Redux architecture

---

##  Folder Structure

```
client/
 ├── app/
 │    ├── layout.tsx
 │    └── page.tsx
 └── redux/
      ├── store.ts
      ├── provider.tsx
      └── slices/
           └── counterSlice.ts
```

---

##  Installation & Setup

###  Install Dependencies

```bash
npm install @reduxjs/toolkit react-redux
```

---

##  Redux Store Setup

### `client/redux/store.ts`

```ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

##  Redux Slice Example

### `client/redux/slices/counterSlice.ts`

```ts
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

---

##  Redux Provider Setup

### `client/redux/provider.tsx`

```tsx
"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import type { ReactNode } from "react";

interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
```

---

##  Wrap Redux Provider in Layout

### `client/app/layout.tsx`

```tsx
import ReduxProvider from "../redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
```

---

##  Using Redux in Components

### `client/app/page.tsx`

```tsx
"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { increment, decrement } from "../redux/slices/counterSlice";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <main style={{ padding: 24 }}>
      <h1>Redux Toolkit Setup</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </main>
  );
}
```


---

##  Core Concepts

| Concept     | Description                    |
| ----------- | ------------------------------ |
| store       | Central global state           |
| slice       | Feature-based state + reducers |
| reducer     | Function to update state       |
| useSelector | Read data from store           |
| useDispatch | Send actions                   |

---

Happy Coding 🚀
