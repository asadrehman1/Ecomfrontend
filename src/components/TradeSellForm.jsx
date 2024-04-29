import React, { useState } from "react";

const SellTradeForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    watchBrand: "",
    modelNumber: "",
    referenceNumber: "",
    interestedInTradingFor: "",
    watchCondition: [],
    approximateAge: "",
    desiredAmount: "",
    originalPapersAvailable: "",
    originalBoxAvailable: false,
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData({ ...formData, [name]: [...formData[name], value] });
      } else {
        const updatedArray = formData[name].filter((item) => item !== value);
        setFormData({ ...formData, [name]: updatedArray });
      }
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-[80%] mx-auto p-6 bg-gray-200 rounded-md md:my-20 my-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-[#4D0000FD] text-center">
        To Schedule An Appointment, Please Fill Out The Form Below
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="watchBrand">
              Watch Brand
            </label>
            <input
              type="text"
              id="watchBrand"
              name="watchBrand"
              value={formData.watchBrand}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="modelNumber">
              Model Number
            </label>
            <input
              type="text"
              id="modelNumber"
              name="modelNumber"
              value={formData.modelNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="referenceNumber">
              Reference Number
            </label>
            <input
              type="text"
              id="referenceNumber"
              name="referenceNumber"
              value={formData.referenceNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="interestedInTradingFor">
              What watch are you interested in trading for?
            </label>
            <input
              type="text"
              id="interestedInTradingFor"
              name="interestedInTradingFor"
              value={formData.interestedInTradingFor}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Watch Condition</label>
            <div>
              <label className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  name="watchCondition"
                  value="Unworn"
                  checked={formData.watchCondition.includes("Unworn")}
                  onChange={handleChange}
                  className="mr-2"
                />
                Unworn
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="watchCondition"
                  value="Pre-Owned"
                  checked={formData.watchCondition.includes("Pre-Owned")}
                  onChange={handleChange}
                  className="mr-2"
                />
                Pre-Owned
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="approximateAge">
              Approx. Age of Watch
            </label>
            <input
              type="text"
              id="approximateAge"
              name="approximateAge"
              value={formData.approximateAge}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="desiredAmount">
              Approx. Desired Amount
            </label>
            <input
              type="text"
              id="desiredAmount"
              name="desiredAmount"
              value={formData.desiredAmount}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="originalPapersAvailable">
              Original Papers Available?
            </label>
            <select
              id="originalPapersAvailable"
              name="originalPapersAvailable"
              value={formData.originalPapersAvailable}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-300 focus:outline-none focus:bg-white"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">
              Original Box Available?
              <input
                type="checkbox"
                name="originalBoxAvailable"
                checked={formData.originalBoxAvailable}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    originalBoxAvailable: e.target.checked,
                  })
                }
                className="ml-2"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="images">
              Add Images
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-300 focus:outline-none focus:bg-white"
            />
          </div>
        </div>
        <div className="w-1/2 mx-auto mt-3">
          <button
            type="submit"
            className="w-full py-2 bg-[#4D0000FD] text-white rounded-md focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellTradeForm;
