const { shopeeModule } = require("./models/shopee_schema");

(async () => {
  try {
    /**
       * const result =  await Users.findOne({ name: 'zerocho' }).exec();
  const updatedResult = await Users.update({ name: result.name }).exec();
  console.log(updatedResult);
       */

    const get_module = await shopeeModule.find({}).exec();
    console.log(get_module);
    // testModel.find({ module_id: 6 }, function (err, calls) {
    //   console.log("testModel이 두번째 실행?");
    //   //   console.log(err, calls, calls.length);
    // });
  } catch (err) {
    console.log(err);
  }
})();
