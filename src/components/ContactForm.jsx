import { useState } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { formspreeEndpoint, salonConfig } from "../config/salonConfig";
import { services } from "../data/services";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  else if (values.name.trim().length > 80) errors.name = "Name is too long.";

  if (!values.phone.trim()) errors.phone = "Please enter a phone number.";
  else if (!/^[0-9+()\-\s]{7,20}$/.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number.";

  if (!values.email.trim()) errors.email = "Please enter an email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";

  if (!values.service) errors.service = "Please select a service.";
  if (!values.date) errors.date = "Please choose a preferred date.";
  if (!values.time) errors.time = "Please choose a preferred time.";
  if (values.message.length > 1000) errors.message = "Message must be under 1000 characters.";

  return errors;
}

const fieldClass =
  "w-full rounded-2xl border border-input bg-card px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

export default function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const update = (key) => (event) => {
    setValues((v) => ({ ...v, [key]: event.target.value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    if (!formspreeEndpoint) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Beauty Parlour Enquiry — ${salonConfig.name}`,
          "Customer Name": values.name.trim(),
          "Phone Number": values.phone.trim(),
          "Email Address": values.email.trim(),
          "Selected Service": values.service,
          "Preferred Date": values.date,
          "Preferred Time": values.time,
          Message: values.message.trim(),
        }),
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("success");
      setValues(emptyForm);
    } catch (error) {
      console.error("Enquiry submission failed", error);
      setStatus("error");
    }
  };

  const loading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[2rem] border border-border bg-card p-6 shadow-luxe sm:p-9"
    >
      <h2 className="text-3xl">Send an enquiry</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Tell us what you'd like and when — we usually reply within a few hours.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name}>
          <input
            className={fieldClass}
            value={values.name}
            onChange={update("name")}
            placeholder="Jane Doe"
            maxLength={80}
            autoComplete="name"
          />
        </Field>

        <Field label="Phone Number" error={errors.phone}>
          <input
            className={fieldClass}
            value={values.phone}
            onChange={update("phone")}
            placeholder="+1 555 010 2288"
            maxLength={20}
            autoComplete="tel"
          />
        </Field>

        <Field label="Email Address" error={errors.email} full>
          <input
            className={fieldClass}
            type="email"
            value={values.email}
            onChange={update("email")}
            placeholder="you@email.com"
            maxLength={120}
            autoComplete="email"
          />
        </Field>

        <Field label="Select Service" error={errors.service} full>
          <select className={fieldClass} value={values.service} onChange={update("service")}>
            <option value="">Choose a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Beauty Package">Beauty Package</option>
            <option value="Something else">Something else</option>
          </select>
        </Field>

        <Field label="Preferred Date" error={errors.date}>
          <input
            className={fieldClass}
            type="date"
            value={values.date}
            onChange={update("date")}
          />
        </Field>

        <Field label="Preferred Time" error={errors.time}>
          <input
            className={fieldClass}
            type="time"
            value={values.time}
            onChange={update("time")}
          />
        </Field>

        <Field label="Message" error={errors.message} full>
          <textarea
            className={`${fieldClass} min-h-32 resize-y`}
            value={values.message}
            onChange={update("message")}
            placeholder="Tell us about the look or treatment you have in mind."
            maxLength={1000}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {loading ? "Sending…" : "Send Enquiry"}
      </button>

      {status === "success" ? (
        <p className="mt-5 inline-flex items-start gap-2 rounded-2xl bg-secondary p-4 text-sm">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          Thank you! Your enquiry has been sent successfully. Our team will contact you shortly.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="mt-5 inline-flex items-start gap-2 rounded-2xl bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          Sorry, we couldn't send your enquiry. Please try again or contact us directly by phone
          or WhatsApp.
        </p>
      ) : null}

      {!formspreeEndpoint ? (
        <p className="mt-5 text-xs text-muted-foreground">
          Setup note: add your Formspree endpoint as VITE_FORMSPREE_ENDPOINT so enquiries reach
          the salon inbox.
        </p>
      ) : null}
    </form>
  );
}

function Field({ label, error, full, children }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
        {label}
      </span>
      {children}
      {error ? <span className="text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
