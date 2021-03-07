const { shopeeModule } = require("../models/shopee_schema");
const request = require("request-promise");

/**
 * const arr = [{ name: 'Star Wars' }, { name: 'The Empire Strikes Back' }];
Movies.insertMany(arr, function(error, docs) {});
 */

(async () => {
  try {
    const response = await request.get(
      "https://open.shopee.com/api/v1/doc/module/?version=1",
      { json: true }
    );

    response.modules.shift();

    const mongoDBInsertData = response.modules.map((module) => ({
      module_id: module.module_id,
      module_name: module.module_name,
      items: module.items.map((item) => ({
        id: item.id,
        name: item.name,
      })),
    }));
    console.log(mongoDBInsertData[0]);

    await shopeeModule.insertMany(mongoDBInsertData);

    console.log("success!!");
  } catch (err) {
    console.log(err);
  }
})();
