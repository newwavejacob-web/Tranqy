"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError(null);

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(body.error ?? `Request failed (${res.status})`);
      }
      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-lg border border-accent/40 bg-bg-elevated p-6">
        <p className="font-mono text-sm text-accent mb-2">Sent.</p>
        <p className="text-fg">
          Thanks — I&rsquo;ll reply within one business day.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-md border border-border bg-bg px-4 py-3 text-fg placeholder:text-fg-subtle focus:outline-none focus:border-accent transition-colors";

  const labelClasses =
    "block text-xs font-mono uppercase tracking-widest text-fg-muted mb-2";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          What do you need?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClasses} resize-y`}
        />
      </div>

      {state === "error" && error ? (
        <p className="text-sm text-rose-400" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-bg font-medium disabled:opacity-60 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors"
      >
        {state === "submitting" ? "Sending…" : "Send message"}
        <Send size={14} aria-hidden />
      </button>
    </form>
  );
}
