// ESNEK

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert([
    {
      vin: "1GNGC26RXXJ407648",
      make: "Chevrolet",
      model: "Suburban",
      mileage: "1999",
      title: "Az kullanılmış",
      transmission: "Manuel",
    },
  ]);
};
