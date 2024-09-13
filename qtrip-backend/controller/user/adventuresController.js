const { adventuresData } = require('../../models')


const adventuresController = {
   async adventures(req, res) {
      try {
         const {city, q } = req.query;
         if (q && q.length < 3) {
            return res.status(404).json({
               success: false,
               message: `Adventure Query length should be atleast 3! Currently it is only ${q.length} `
            })
         }
         console.log(city);
         const adventure = await adventuresData.find({
            $and: [{
               city: new RegExp(city, 'i')
            },{
               name: new RegExp(q, 'i')
            }]
         });
         if (adventure.length) {
            return res.json(adventure);
         }
         else {
            return res.status(400).json({
               success: false,
               message: `Adventures not found for ${q}!`
            })
         }
      }
      catch (err) {
         return res.json({
            message: "Some error occured while fetching adventures!",
         })
      }
   },

   async adventuresDetails(req, res) {
      try {
         const { adventure } = req.query;
         const advent = await adventuresData.findOne({ id: adventure });
         if (advent) {
            return res.status(200).json({
               success: true,
               data: advent,
            })
         }
         else {
            return res.json({
               success: false,
               message: `Adventure for ${adventure} is no longer available!`,
            })
         }
      }
      catch (err) {
         return res.json({
            success: false,
            message: "Some error occured!"
         })
      }
   }

}


module.exports = adventuresController;