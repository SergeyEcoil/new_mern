import React from "react";

const FormModal = ({
  formVisible,
  handleFormSubmit,
  formData,
  setFormData,
  handleCancel,
}) => {
  const handleWeightChange = (e) => {
    const weightValue = e.target.value;
    setFormData({
      ...formData,
      weight: [{ value: weightValue, date: new Date().toISOString() }],
    });
  };

  const handleFryoilChange = (e) => {
    const fryoilValue = e.target.value;
    setFormData({
      ...formData,
      fryoil: [{ value: fryoilValue, date: new Date().toISOString() }],
    });
  };

  return (
    formVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
        <form
          className="bg-gray-100 p-4 rounded shadow-md w-full max-w-md"
          onSubmit={handleFormSubmit}
        >
          <div className="mb-3 flex items-center">
            <label className="w-2/5 text-[15px]">Город:</label>
            <input
              type="text"
              className="form-input w-3/5 px-1 py-1"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3 flex items-center">
            <label className="w-2/5 text-[15px]">Название кафе:</label>
            <textarea
              rows="1"
              className="form-textarea w-3/5 px-1 py-1"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            ></textarea>
          </div>
          <div className="mb-3 flex items-center">
            <label className="w-2/5 text-[15px]">Телефон:</label>
            <input
              type="tel"
              className="form-input w-3/5 px-1 py-1"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="mb-3 flex items-center">
            <label className="w-2/5 text-[15px]">Улица:</label>
            <input
              type="text"
              className="form-input w-3/5 px-1 py-1"
              value={formData.street}
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3 flex items-center">
            <label className="w-2/5 text-[15px]">Номер дома:</label>
            <input
              type="text"
              className="form-input w-3/5 px-1 py-1"
              value={formData.house}
              onChange={(e) =>
                setFormData({ ...formData, house: e.target.value })
              }
            />
          </div>
          {/* <div className="mb-3 flex items-center">
            <label className="w-2/5 text-[15px]">Укажите вес:</label>
            <input
              type="tel"
              className="form-input w-3/5 px-1 py-1"
              value={formData.weight?.[0]?.value || ""}
              onChange={handleWeightChange}
            />
          </div> */}
          <div className="mb-3 flex items-center">
            <label className="w-2/5 text-[15px]">Отработка Р/кг:</label>
            <input
              type="text"
              className="form-input w-3/5 px-1 py-1"
              value={formData.usedprice}
              onChange={(e) =>
                setFormData({ ...formData, usedprice: e.target.value })
              }
            />
          </div>
          <div className="mb-3 flex items-center">
            <label className="w-2/5 text-[15px]">Заявка вывоз:</label>
            <input
              type="text"
              className="form-input w-3/5 px-1 py-1"
              value={formData.order}
              onChange={(e) =>
                setFormData({ ...formData, order: e.target.value })
              }
            />
          </div>
          {/* <div className="mb-3 flex items-center">
            <label className="w-2/5 text-[15px]">
              Заявка фритюр шт. по 10л:
            </label>
            <input
              type="tel"
              className="form-input w-3/5 px-1 py-1"
              value={formData.fryoil?.[0]?.value || ""}
              onChange={handleFryoilChange}
            />
          </div> */}
          <div className="mb-3 flex items-center">
            <label className="w-2/5 text-[15px]">Фритюр Р. за 10л.:</label>
            <input
              type="text"
              className="form-input w-3/5 px-1 py-1"
              value={formData.fryprice}
              onChange={(e) =>
                setFormData({ ...formData, fryprice: e.target.value })
              }
            />
          </div>
          <div className="mb-3 flex items-center">
            <label className="w-2/5 text-[15px]">Время работы:</label>
            <input
              type="text"
              className="form-input w-3/5 px-1 py-1"
              value={formData.worktime}
              onChange={(e) =>
                setFormData({ ...formData, worktime: e.target.value })
              }
            />
          </div>
          <div className="mb-3 flex items-center">
            <label className="w-2/5 text-[15px]">Заказ фритюра шт:</label>
            <input
              type="text"
              className="form-input w-3/5 px-1 py-1"
              value={formData.fryorder}
              onChange={(e) =>
                setFormData({ ...formData, fryorder: e.target.value })
              }
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="w-50 h-10 bg-red-900 text-white px-4 py-2 rounded mr-2"
              onClick={handleCancel}
            >
              Отмена
            </button>
            <button
              type="submit"
              className="w-50 h-10 bg-green-900 text-white px-4 py-2 rounded"
            >
              Применить
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default FormModal;
