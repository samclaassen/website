"use client";

import { useId, useState } from "react";

type State = "idle" | "sending" | "done" | "error";

export function SubscribeForm({ source }: { source: string }) {
  const id = useId();
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setState("sending");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.get("email"), company: data.get("company"), source }),
      });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };
      if (res.ok && body.ok) {
        setState("done");
        form.reset();
      } else {
        setState("error");
        setMessage(body.message || "Something went wrong. Please try again.");
      }
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (state === "done") {
    return (
      <p role="status" className="mt-8 text-[18px]">
        Thank you. You&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative mt-8 mx-auto flex max-w-[560px] flex-wrap gap-3" noValidate>
      <label htmlFor={`${id}-email`} className="sr-only">
        Email address
      </label>
      <input
        id={`${id}-email`}
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        placeholder="you@example.com"
        className="min-w-0 flex-1 border border-line bg-linen px-4 py-3 font-label text-[15px] placeholder:text-caption/70 focus:border-umber outline-none"
      />
      {/* Honeypot: hidden from people, filled by bots. */}
      <div className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" className="btn justify-center" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Subscribe"}
      </button>
      {state === "error" && (
        <p role="alert" className="basis-full text-[14px] text-terracotta font-label">
          {message}
        </p>
      )}
    </form>
  );
}
