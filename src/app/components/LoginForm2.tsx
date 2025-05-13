"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`입력된 이메일: ${email}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">이메일:</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-48 rounded-md border border-gray-300 p-2"
        id="email"
        type="email"
        placeholder="이메일을 입력하세요"
        data-testid="email-input"
      />
      <button className="rounded-md bg-blue-500 p-2 text-white" type="submit">
        로그인
      </button>
    </form>
  );
}
