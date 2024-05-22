import React, { useState } from "react";
import cancelIcon from "./Assets/Delete Icon.svg";

function Share({ closeOverlay }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    job: "",
    company: "",
    notes: ""
  });

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted", formData);
      setFormError(""); 
    } else {
      setErrors(newErrors);
      setFormError("Please fill in all required fields.");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.email) newErrors.email = "Please enter your email";
    if (!formData.mobile) newErrors.mobile = "Please enter your mobile number";
    if (!formData.job) newErrors.job = "Please enter your job";
    if (!formData.company) newErrors.company = "Please enter your company";
    return newErrors;
  };

  return (
    <div className="px-8">
      <div className="bg-white grid justify-center items-center gap-y-10 rounded-[22px] pb-20 min-w-96">
        <div className="grid pt-10 px-8 justify-end" onClick={closeOverlay}>
          <img src={cancelIcon} alt="Close Icon" />
        </div>
        <div className="px-4">
          <h1 className="text-neutral-900 text-center text-md font-sourceSans font-semibold">
            Send Ayantoye David’s contact to your email and whatsapp
          </h1>
        </div>

        <form className="px-4 grid gap-y-[18px]" onSubmit={handleSubmit}>
          {formError && <p className="text-red-500 text-sm">{formError}</p>}
          
          <input
            className={`pl-[10px] py-2 text-zinc-500 bg-[#f1f1f1] outline-[#30C6C6] rounded-[10px] w-full placeholder:text-sm ${errors.name ? 'border-red-500' : ''}`}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          
          <input
            className={`pl-[10px] py-2 text-zinc-500 bg-[#f1f1f1] outline-[#30C6C6] rounded-[10px] w-full placeholder:text-sm ${errors.email ? 'border-red-500' : ''}`}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          
          <input
            className={`pl-[10px] py-2 text-zinc-500 bg-[#f1f1f1] outline-[#30C6C6] rounded-[10px] w-full placeholder:text-sm ${errors.mobile ? 'border-red-500' : ''}`}
            type="number"
            name="mobile"
            placeholder="Your Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />
          
          <input
            className={`pl-[10px] py-2 text-zinc-500 bg-[#f1f1f1] outline-[#30C6C6] rounded-[10px] w-full placeholder:text-sm ${errors.job ? 'border-red-500' : ''}`}
            type="text"
            name="job"
            placeholder="Job"
            value={formData.job}
            onChange={handleChange}
          />
          
          <input
            className={`pl-[10px] py-2 text-zinc-500 bg-[#f1f1f1] outline-[#30C6C6] rounded-[10px] w-full placeholder:text-sm ${errors.company ? 'border-red-500' : ''}`}
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />
          
          <textarea
            className="pl-[10px] py-2 text-zinc-500 bg-[#f1f1f1] outline-[#30C6C6] rounded-[10px] w-full placeholder:text-sm"
            id="notes"
            name="notes"
            rows="4"
            cols="50"
            placeholder="Enter your notes here..."
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
          
          <div className="px-4">
            <button className="bg-[#5E0DD3] justify-center rounded-[26px] py-3 shadow font-semibold text-white px-2 w-full" type="submit">
              Exchange
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Share;
