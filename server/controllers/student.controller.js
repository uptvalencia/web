const Student = require('../models/student');
const studentController = {};

studentController.getStudents = async (req, res) => {
    const students = await Student.find();
    res.json(students);
}

studentController.createStudent = async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.json({
        'status': 'Empeado guardado'
    });
}

studentController.getStudent = async (req, res) => {
    const students = await Student.findById(rep.params.id);
    res.json(students);
}

studentController.editStudent = async (req, res) => {
    const { id } = rep.params
    const student = {
        name: rep.body.name,
        position: rep.body.position,
        office: rep.body.office,
        salary: rep.body.salary
    }
    await Student.findById(id, {$set: student}, {new: true});
    
    res.json({
        'status': 'Empleado actualizado'
    });
}

studentController.deleteStudent = async (req, res) => {
    await Student.findByIdRemove(req.params.id);
    res.json({
        'status': 'Empleado eliminado'
    });
}

module.exports = studentController;