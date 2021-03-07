const { testModel, api_value } = require("../models/test_schema");

const fir_test_val = new testModel({ module_id: 6, module_name: "Shop" });
const second_test_val = new testModel({
  module_id: 7,
  module_name: "ShopCategory",
});

const fir_api_test_val = new api_value({
  id: 410,
  name: "shopee.shop.GetShopInfo",
  module_id: 6,
});

const sec_api_test_val = new api_value({
  id: 411,
  name: "shopee.shop.UpdateShopInfo",
  module_id: 6,
});

// fir_test_val
//   .save()
//   .then(() => console.log("등록 성공"))
//   .catch((err) => console.log(err, "등록 실패"));
fir_api_test_val
  .save()
  .then(() => console.log("등록 성공"))
  .catch((err) => console.log(err, "등록 실패"));

sec_api_test_val
  .save()
  .then(() => console.log("등록 성공"))
  .catch((err) => console.log(err, "등록 실패"));
