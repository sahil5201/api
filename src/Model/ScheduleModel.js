const DB = require("../DB/db");
const dbFunction = require("../DB/dbFunction");

class ScheduleModel {
    ScheduleModel(BodyData) {
        let Data = [];
        Data.push(
            {
                Task: BodyData.Task,
                startDate: BodyData.startDate ? BodyData.startDate : Date.now(),
                endDate: BodyData.endDate ? BodyData.endDate : Date.now(),
                color: BodyData.color,
                userId: BodyData.userID,
            }
        );
        dbFunction.DB_addData("ScheduleTask", Data[0]);
    }

    
}

module.exports = new ScheduleModel();
