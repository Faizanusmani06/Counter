//import th model
const Counter = require("../models/Counter");

//define route handler

exports.IncrementCounter = async(req,res) => {
    try {
         const data = await Counter.find({});
         const Cnt = await Counter.findByIdAndUpdate(
          {
            _id : "65f1ab5ec594f68eb984b801",
          },
          {
             counter:  data[0].counter+1
          }
        )
    
        // Response
        res.status(200).json({
          success: true,
          data: Cnt,
          message: "Counter has been Incremented",
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          success: false,
          error: err.message,
          message: "Server error",
        });
      }
}
