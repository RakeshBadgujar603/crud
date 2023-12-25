import StudentModel from "../models/Student.js"

class StudentController {
    
    static createDoc = async(req, res) =>{
        console.log("I am createDoc .........");

        try{
            const {name, age, fees } = req.body;
           const doc = new StudentModel({
                name: name,
                age: age,
                fees: fees,
           })

           const result = await doc.save();
           console.log("I am createDoc ......... result ", result);

           res.redirect("/student")
        }catch(error){
            console.log("get All doc error", error);
        }

    }
    
    static editDoc = (req, res) =>{
        console.log("I am getAllDoc.........");
        res.redirect("/edit")
    }

    static updateDocById = (req, res) =>{
        console.log("I am getAllDoc.........");
        res.redirect("/student")
    }
    
    static deleteDocById = async(req, res) =>{
        console.log("I am getAllDoc.........");
        try{
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        }catch(error){
            console.log("get All doc error", error);
        }
    }

    static getAllDoc = async (req, res) =>{
        console.log("I am getAllDoc.........");

        try{
            const result = await StudentModel.find()
            res.render("index", {data : result})
        }catch(error){
            console.log("get All doc error", error);
        }
    }
}


export default StudentController;