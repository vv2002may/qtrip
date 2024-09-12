const { adventuresData, reservationsData, User } = require("../../models");


const reservationsController = {

   async reservations(req, res) {
      try {
         const reserv = await reservationsData.find({ userId: req.headers.userId }).populate('adventureId').sort({ createdAt: -1 });
         return res.status(200).json(reserv);

      }
      catch (err) {
         return res.json({
            success: false,
            message: "Some error occured while fetching reservations!" + err
         })
      }
   },

   async reservationsAdd(req, res) {
      try {
         // increase person if same adventure added again
         const { reservationsId, addPerson } = req.body;
         const isReserve = await reservationsData.findOne({ _id: reservationsId })
         if (isReserve) {
            if (addPerson) { isReserve.person = isReserve.person + 1; }
            else {
               isReserve.person = isReserve.person - 1;
               if (isReserve.person == 0) {
                  await isReserve.deleteOne();
                  return res.status(200).json({
                     success: true,
                     message: "Adventure deleted!",
                  }) 
               }
            }
            await isReserve.save();
            return res.status(200).json({
               success: true,
               message: "Person updated!",
            })
         }

      }
      catch (err) {
         return res.status(400).json({
            success: false,
            message: "Some error occured while adding persons!"+err
         })
      }

   },

   async reservationsNew(req, res) {
      try {
         const { adventureId } = req.body;
         const user = await User.findOne({ _id: req.headers.userId });
         const adventure = await adventuresData.findOne({ id: adventureId });
         if (adventure) {

            // increase person if same adventure added again
            const isReserve = await reservationsData.findOne({ adventureId: adventure._id })
            if (isReserve) {
               isReserve.person = isReserve.person + 1;
               await isReserve.save();
               return res.status(200).json({
                  success: true,
                  message: "Added one more person!",
               })
            }

            // added adventure to reservation for first time
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
         return res.status(400).json({
            success: false,
            message: "Some error occured while making reservations!"
         })
      }

   },


   async reservationsCancel(req, res) {
      try {
         const { reservationsId } = req.body;
         const result = await reservationsData.findOne({ _id: reservationsId });
         if (result) {
            result.isCancelled = !result.isCancelled;
            await result.save();
            return res.status(200).json({
               success: true,
               message: "Adventure Cancelled!",
               data: result,
            })
         }
      }
      catch (err) {
         return res.status(400).json({
            success: false,
            message: "Some error occured while deleting reservations!"
         })
      }
   },

   async reservationsDelete(req, res) {
      try {
         const { reservationsId } = req.body;
         const result = await reservationsData.deleteOne({ _id: reservationsId });
         if (result.deletedCount > 0) {
            return res.status(200).json({
               success: true,
               message: "Adventure Deleted!",
            })
         }
      }
      catch (err) {
         return res.status(400).json({
            success: false,
            message: "Some error occured while deleting reservations!"
         })
      }
   }

}

module.exports = reservationsController;