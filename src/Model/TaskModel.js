const DB = require("../DB/db");
const dbFunction = require("../DB/dbFunction");

class TaskModel {
    TaskModel(BodyData) {
        let Data = [];
        Data.push(
            {
                Task: BodyData.Task,
                Date: Date.now()
            }
        );
        console.log(BodyData, Data[0]);

        dbFunction.DB_addData("Task", Data[0]);
    }
}

module.exports = new TaskModel();
