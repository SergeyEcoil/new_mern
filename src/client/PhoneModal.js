import React from "react";

const PhoneModal = ({
  phoneModalVisible,
  phoneInput,
  setPhoneInput,
  handlePhoneSubmit,
  handlePhoneCancel,
}) => {
  return (
    phoneModalVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
        <div className="bg-white p-4 rounded shadow-md w-full max-w-xs">
          <p className="mb-4">Телефона нет, но Вы его можете добавить:</p>
          <input
            type="tel"
            className="form-input w-full mb-3 px-4 py-2"
            placeholder="Укажите телефон"
            value={phoneInput}
            onChange={(e) => setPhoneInput(e.target.value)}
          />
          <div className="flex justify-end">
            <button
              type="button"
              className="btn btn-secondary bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={handlePhoneCancel}
            >
              Отмена
            </button>
            <button
              type="button"
              className="btn btn-dark bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handlePhoneSubmit}
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default PhoneModal;
