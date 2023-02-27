const validateFields = (obj, ...allowedFields) => {
    
  if (Object.keys(obj).length === 0) throw new Error("No puedes enviar un objeto vacío");

  const invalidFields = Object.keys(obj).filter(
    (el) => !allowedFields.includes(el)
  );

  if (invalidFields.length) {
    throw new Error(
      `Los siguientes campos no son permitidos: ${invalidFields.join(", ")}`
    );
  }

  const newObj = {};

  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });
  return newObj;
};

module.exports = { validateFields };
