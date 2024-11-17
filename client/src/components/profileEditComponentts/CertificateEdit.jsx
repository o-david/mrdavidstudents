import React, { useState, useEffect } from 'react';
import PopUp from '../PopUp';
import Loader from '../Loader';
import { useAuthStore } from '../../store/authStore';
import Input from '../Input';
import api from '../../utils/api';
import { API_URL } from '../../constants/urlConstants';

const CertificateEdit = ({ setShowEditCertificates }) => {
  const { user, checkAuth } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    certifications: [],
  });

  // Initialize formData with user's existing certifications
  useEffect(() => {
    if (user.certifications) {
      setFormData({ certifications: [...user.certifications] });
    }
  }, [user.certifications]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(formData);
      await api.put(`${API_URL}/user/update-user`, formData);
      checkAuth();
      // Optionally call checkAuth() here if needed
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedCertificates = [...formData.certifications];
    updatedCertificates[index] = { ...updatedCertificates[index], [field]: value };
    setFormData({ ...formData, certifications: updatedCertificates });
  };

  const handleAddCertificate = () => {
    const newCertificate = { id: Date.now(), name: '', issuedBy: '', date: '' };
    setFormData(prevState => ({ ...prevState, certifications: [...prevState.certifications, newCertificate] }));
  };

  const handleDeleteCertificate = (index) => {
    const updatedCertificates = formData.certifications.filter((_, i) => i !== index);
    setFormData({ ...formData, certifications: updatedCertificates });
  };

  return (
    <PopUp>
      {loading && <Loader />}
      <div className="sm:min-w-[45%] px-6 flex text-sec3 flex-col items-center gap-10 bg-pry py-8 rounded-lg shadow-md relative">
        <h3 className="text-[2rem]">Certifications</h3>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
          <div className="mb-8">
            {formData.certifications.map((cert, index) => (
              <div key={index} className="flex gap-2 mb-8">
                <Input
                  type="text"
                  placeholder="Certificate Name"
                  value={cert.name}
                  onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Issued By"
                  value={cert.issuer}
                  onChange={(e) => handleInputChange(index, 'issuer', e.target.value)}
                />
                <Input
                  type="date"
                  value={cert.date ? cert.date.split('T')[0] : ''}
                  onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => handleDeleteCertificate(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddCertificate} className="border border-sec3 rounded-lg py-2 transition-all hover:bg-sec3 hover:text-white">
              Add Certificate
            </button>
          </div>
          <button type="submit" className="border border-sec3 rounded-lg py-2 transition-all hover:bg-sec3 hover:text-white w-full">
            Save
          </button>
        </form>
        <button
          onClick={() => setShowEditCertificates(false)}
          className="absolute top-0 right-0 p-4 text-sec3 font-bold text-right text-4xl"
        >
          x
        </button>
      </div>
    </PopUp>
  );
}

export default CertificateEdit;