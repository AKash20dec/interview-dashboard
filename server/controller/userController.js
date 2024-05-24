import User from "../model/userModel.js";


export const addUser = async (req, res) => {
    try {
        const { name, dob, contact, email, description } = req.body;

        const newUser = new User({
            name,
            dob,
            contactNumber : contact,
            email,
            userDescription : description
        });

        
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const deleteUser = async (req, res) => {
    try {
      
      const { id } = req.params;
        console.log(id);
      
  
      
      const deletedUser = await User.findByIdAndDelete(id);
  
      
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const updateUser = async (req, res) => {
    try {
      
      const { id } = req.params;
  

      const updates = req.body;
  
      const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };