import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Update the specific field in the state
    }));
  };

  const navigate = useNavigate();
  const [invalidCreds, setInvalidCreds] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .post(API_URL+"/register", formData)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          localStorage.setItem("jwt", response.data.token);
          setInvalidCreds(false)
          navigate("/")
        }else{
          console.log(response.data)
          setInvalidCreds(true)
        }
      })
      .catch((response) => {
        console.log(response.data)
        setInvalidCreds(true);
      });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (!form) return;
      const elements = Array.from(form.elements) as HTMLElement[];
      const index = elements.indexOf(e.currentTarget as HTMLElement);
      if (index > -1 && index < elements.length - 1) {
        elements[index + 1].focus();
      }
    }
  };

  return (
<div className="flex justify-center items-center h-screen">
    <div className="w-80 mx-auto flex-none">
      <label className="text-6xl text-[#07273c] font-bold mb-8 block text-center">
        Sign Up
      </label>
      <form className="p-4 bg-[#3fe881] rounded-lg space-y-6 border border-green-600" onSubmit={submit}>
        <div>
          <input
            className="w-full p-3 bg-green-400  border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#07273c]"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          <input
            className="w-full p-3 bg-green-400 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#07273c]"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          <input
            className="w-full p-3 bg-green-400 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#07273c]"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            onKeyDown={handleKeyDown}
          />
        </div>
        <h6 className="text-red-500 break-words leading-tight min-h-[24px]">
          {invalidCreds ? "This Email or Username is already used" : "\u00A0"}
        </h6>
        <div className="flex gap-4 justify-end">
          <button
            className="px-4 py-2 border-2 border-[#07273c] text-[#07273c] rounded-md
                 hover:bg-[#07273c] hover:text-white transition-colors font-medium"
            type="submit"
          >
            Sign Up
          </button>
          <Link
            to="/login"
            className="px-4 py-2 border-2 border-gray-700 text-gray-700 rounded-md
                 hover:bg-gray-700 hover:text-white transition-colors font-medium"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
</div>
  );
}


