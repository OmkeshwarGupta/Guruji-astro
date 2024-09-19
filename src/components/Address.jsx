import React from 'react';

const Address = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block mb-2">Address Line 1<span className='text-red-500'>*</span></label>
        <input
          type="text"
          value={formData.addressLine1}
          onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
          className={`border p-2 w-full ${errors.addressLine1 ? 'border-red-500' : ''}`}
        />
        {errors.addressLine1 && <p className="text-red-500 text-sm">{errors.addressLine1}</p>}
      </div>
      <div>
        <label className="block mb-2">Address Line 2</label>
        <input
          type="text"
          value={formData.addressLine2}
          onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
          className={`border p-2 w-full `}
        />
        
      </div>
      <div className="mb-4">
        <label className="block mb-2">City<span className='text-red-500'>*</span></label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className={`border p-2 w-full ${errors.city ? 'border-red-500' : ''}`}
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
      </div>

      <div>
        <label className="block mb-2">State<span className='text-red-500'>*</span></label>
        <input
          type="text"
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          className={`border p-2 w-full ${errors.state ? 'border-red-500' : ''}`}
        />
        {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
      </div>
      <div>
        <label className="block mb-2">zipCode<span className='text-red-500'>*</span></label>
        <input
          type="text"
          value={formData.zipCode}
          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
          className={`border p-2 w-full ${errors.zipCode ? 'border-red-500' : ''}`}
        />
        {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
      </div>
      
    </div>
  );
};

export default Address;
