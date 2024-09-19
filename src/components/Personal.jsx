import React from 'react';

const Personal = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block mb-2">Name<span className='text-red-500'>*</span></label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`border p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email<span className='text-red-500'>*</span></label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`border p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Phone<span className='text-red-500'>*</span></label>
        <input
          type="text"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`border p-2 w-full ${errors.phone ? 'border-red-500' : ''}`}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
    </div>
  );
};

export default Personal;
