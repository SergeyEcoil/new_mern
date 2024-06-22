import React from "react";

const FormModal = ({
  formVisible,
  handleFormSubmit,
  formData,
  setFormData,
  handleCancel,
}) => {
  return (
    formVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
        <form
          className="bg-white p-6 rounded shadow-md w-full max-w-md"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            className="form-input w-full mb-3 px-4 py-2"
            placeholder="Укажите город"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
          <textarea
            rows="1"
            className="form-textarea w-full mb-3 px-4 py-2"
            placeholder="название кафе"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          ></textarea>
          <input
            type="tel"
            className="form-input w-full mb-3 px-4 py-2"
            placeholder="Укажите телефон"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <input
            type="text"
            className="form-input w-full mb-3 px-4 py-2"
            placeholder="Укажите улицу"
            value={formData.street}
            onChange={(e) =>
              setFormData({ ...formData, street: e.target.value })
            }
            required
          />
          <input
            type="tel"
            className="form-input w-full mb-3 px-4 py-2"
            placeholder="Укажите номер дома"
            value={formData.house}
            onChange={(e) =>
              setFormData({ ...formData, house: e.target.value })
            }
          />
          <input
            type="tel"
            className="form-input w-full mb-3 px-4 py-2"
            placeholder="Укажите вес"
            value={formData.weight}
            onChange={(e) =>
              setFormData({ ...formData, weight: e.target.value })
            }
          />
          <input
            type="tel"
            className="form-input w-full mb-3 px-4 py-2"
            placeholder="Цена за использованный товар"
            value={formData.usedprice}
            onChange={(e) =>
              setFormData({ ...formData, usedprice: e.target.value })
            }
          />
          <input
            type="text"
            className="form-input w-full mb-3 px-4 py-2"
            placeholder="Заказ"
            value={formData.order}
            onChange={(e) =>
              setFormData({ ...formData, order: e.target.value })
            }
          />
          <input
            type="text"
            className="form-input w-full mb-3 px-4 py-2"
            placeholder="Масло для фритюра"
            value={formData.fryoil}
            onChange={(e) =>
              setFormData({ ...formData, fryoil: e.target.value })
            }
          />
          <input
            type="tel"
            className="form-input w-full mb-3 px-4 py-2"
            placeholder="Цена масла для фритюра"
            value={formData.fryprice}
            onChange={(e) =>
              setFormData({ ...formData, fryprice: e.target.value })
            }
          />
          <input
            type="text"
            className="form-input w-full mb-3 px-4 py-2"
            placeholder="Время работы"
            value={formData.worktime}
            onChange={(e) =>
              setFormData({ ...formData, worktime: e.target.value })
            }
          />
          <div className="flex justify-end">
            <button
              type="button"
              className="btn btn-secondary bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleCancel}
            >
              Отмена
            </button>
            <button
              type="submit"
              className="btn btn-dark bg-blue-500 text-white px-4 py-2 rounded"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default FormModal;
