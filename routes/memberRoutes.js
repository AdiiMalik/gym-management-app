// //memberRoutes.js
// import express from 'express';
// import Member from '../models/Member.model.js';

// const router = express.Router();

// // Get all members
// router.get('/', async (req, res) => {
//   try {
//     const members = await Member.find();
//     res.json(members);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get single member by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const member = await Member.findById(req.params.id);
//     if (!member) return res.status(404).json({ message: 'Member not found' });
//     res.json(member);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// // Create a new member
// router.post('/', async (req, res) => {
//   try {
//     const newMember = new Member(req.body);
//     const savedMember = await newMember.save();
//     res.status(201).json(savedMember);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });


// // Update member
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedMember) return res.status(404).json({ message: 'Member not found' });
//     res.json(updatedMember);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete member
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedMember = await Member.findByIdAndDelete(req.params.id);
//     if (!deletedMember) return res.status(404).json({ message: 'Member not found' });
//     res.json({ message: 'Member deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;

// import express from 'express';
// import Member from '../models/Member.model.js';
// const router = express.Router();
// import authMiddleware from '../middleware/authMiddleware.js';
// router.use(authMiddleware);

// router.use(authMiddleware); 

// // Create a new member
// router.post('/', async (req, res) => {
//   try {
//     const newMember = new Member(req.body);
//     const savedMember = await newMember.save();
//     res.status(201).json(savedMember);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Get all members
// router.get('/', async (req, res) => {
//   try {
//     const members = await Member.find();
//     res.json(members);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get single member by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const member = await Member.findById(req.params.id);
//     if (!member) return res.status(404).json({ message: 'Member not found' });
//     res.json(member);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Update member
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedMember) return res.status(404).json({ message: 'Member not found' });
//     res.json(updatedMember);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete member
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedMember = await Member.findByIdAndDelete(req.params.id);
//     if (!deletedMember) return res.status(404).json({ message: 'Member not found' });
//     res.json({ message: 'Member deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;
import express from 'express';
import Member from '../models/Member.model.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// ✅ Apply auth middleware for all routes
router.use(authMiddleware);

// -------------------- ROUTES ----------------------

// Get all members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single member by ID
router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add member
router.post('/', async (req, res) => {
  try {
    const newMember = new Member(req.body);
    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ✅ SINGLE, CLEAN update member route
router.put('/:id', async (req, res) => {
  try {
    const updated = await Member.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Member not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update member', error });
  }
});

// Delete member
router.delete('/:id', async (req, res) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id);
    if (!deletedMember) return res.status(404).json({ message: 'Member not found' });
    res.json({ message: 'Member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
