const mongoose = require("mongoose");
const { testModel, api_value } = require("./models/test_schema");

(async () => {
  try {
    /**
       * const result =  await Users.findOne({ name: 'zerocho' }).exec();
  const updatedResult = await Users.update({ name: result.name }).exec();
  console.log(updatedResult);
       */

    const get_module = await testModel.findOne({ module_id: 6 }).exec();
    const find_api_info = await api_value
      .find({ module_id: get_module.module_id })
      .exec();
    console.log(find_api_info);
    // testModel.find({ module_id: 6 }, function (err, calls) {
    //   console.log("testModel이 두번째 실행?");
    //   //   console.log(err, calls, calls.length);
    // });
  } catch (err) {
    console.log(err);
  }
})();
