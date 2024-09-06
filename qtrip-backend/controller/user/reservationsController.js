const { adventuresData, reservationsData, User } = require("../../models");


const reservationsController = {

   async reservations(req, res) {
      try {
         const reserv = await reservationsData.find();
         return res.status(200).json({
            success: true,
            data: reserv
         })

      }
      catch (err) {
         return res.json({
            success: false,
            message: "Some error occured while fetching reservations!" + err
         })
      }
   },

   async reservationsNew(req, res) {
      try {
         const { adventureId } = req.body;
         const user = await User.findOne({ _id: req.headers.userId });
         const adventure = await adventuresData.findOne({ id: adventureId });
         if (adventure) {
            const reserv = new reservationsData({
               userId: user,
               adventureId: adventure,
            });
            const result = await reserv.save();
            return res.status(200).json({
               success: true,
               message: "Adventure added succesfully!",
            })
         }
         else {
            return res.status(404).json({
               success: false,
               message: "This adventure does not exists!"
            })
         }
      }
      catch (err) {
         return res.json({
            success: false,
            message: "Some error occured while making reservations!"
         })
      }

   },

   async reservationsDelete(req, res) {
      try {
         const { reservationsId } = req.body;
         const result = await reservationsData.findOne({ _id: reservationsId });
         if (result) {
            result.isCancelled = true;
            await result.save();
            return res.status(200).json({
               success: true,
               data: result,
            })
         }
      }
      catch (err) {
         return res.json({
            success: false,
            message: "Some error occured while making reservations!"
         })
      }
   }

}

module.exports = reservationsController;