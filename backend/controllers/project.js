const Project=require('../models/Project');
const User=require('../models/User')

exports.createProject = async (req, res) => {
  const {  leader,
    projectName,
    Objective,
    budget,
    startDate,
    endDate,
    estado,    
    phase, } = req.body;

  try {
    const newProject = new Project({
        leader,
        projectName,
        Objective,
        budget,
        startDate,
        endDate,
        estado,    
        phase,
    });
    if (req.body.leader) {
        const foundleader = await User.find({ email: { $in: leader } });
        newProject.leader = foundleader.map((user) => user._id);
      } else {
        return next(new ErrorResponse("User does not exist", 404));
      }

    const projectSaved = await newProject.save();

    res.status(201).json(projectSaved);
  } catch (error) {
    console.log(error);
   
  }
};

exports.getProjectById = async (req, res) => {
  try{
  const { projectId } = req.params;

  const project = await Project.findById(projectId);
  res.status(200).json(project);
  }
  catch
  (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

exports.getProjects = async (req, res) => {
  try{
  const projects= await Project.find();
  return res.json(projects);
  }
  catch(error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

exports.updateProjectById = async (req, res) => {
  try{
  const updatedProject = await Project.findByIdAndUpdate(
    req.params.projectId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedProject);
  } catch(error) {
    console.log(error);

  }

};



exports.deleteProjectById = async (req, res) => {

  try {
  const { projectId } = req.params;

  await Project.findByIdAndDelete(projectId);

  // code 200 is ok too
  res.status(204).json();


}
catch (error) {
  console.log(error);
  return res.status(500).json(error);
}

};