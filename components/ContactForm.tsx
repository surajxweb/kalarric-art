// ContactForm.js
"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [isInput, setIsInput] = useState("");
  const [message, setMessage] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsInput(e.target.value);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      `/api/add-email?email=${isInput}`
    );

    if (response.ok) {
      const data = await response.json();
      console.log("lelo mera data: ", data);
      // Clear the input field
      setIsInput("");
      setMessage("Thank you for signing up!");
    } else {
      console.error("Sign Up Failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="email" className={styles.label}>
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        value={isInput}
        onChange={handleChange}
        className={styles.input}
        required
      />

      <button type="submit" className={styles.button}>
        Sign Up
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
