const { citiesData } = require("../../models");

const cities = async (req, res) => {
   try {
      const { q } = req.query;
      if (q && q.length < 3) {
         return res.status(404).json({
            message: `City Query length should be atleast 3! Currently it is only ${q.length}`,
         })
      }
      const regex = new RegExp(q, 'i');
      const city = await citiesData.find({
         $or: [{
            city: regex,
         }]
      });
      if (city.length) {
         return res.json(city);
      }
      else {
         return res.status(400).json({
            message: `City not found for ${q}!`,
         });
      }
   }
   catch (err) {
      return res.json({
         success: false,
         message: "Some error occured while loading cities!" + err
      })
   }
}

module.exports = cities;