"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { increment, decrement } from "../redux/slices/counterSlice";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[320px] text-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Redux Toolkit Counter
        </h1>

        <div className="text-5xl font-bold text-slate-900 my-6">{count}</div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition"
          >
            −
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition"
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}
