import { Cue } from '../models/Cue.js';

export async function getAllFromCue(req, res) {
  try {
    const userId = req.obj.id;

    const cue = await Cue.GetAllFromCue(userId);

    return res.status(200).json({ success: true, cue: cue[0].cueSongs });
  } catch (error) {
    return res.staus(400).json({ success: false, message: error });
  }
}
export async function addToCue(req, res) {
  try {
    const userId = req.obj.id;

    const videoId = req.body.videoId;

    const obj = {
      userId,
      videoId,
    };

    await Cue.AddToCue(obj);

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.staus(400).json({ success: false, message: error });
  }
}
export async function removeFromCue(req, res) {
  try {
    const userId = req.obj.id;
    const cueId = req.body.cueId;

    const obj = {
      cueId,
      userId,
    };
    await Cue.RemoveFromCue(obj);

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.staus(400).json({ success: false, message: error });
  }
}

export async function updateCue(req, res) {
  try {
    const userId = req.obj.id;
    const cueArray = req.body.cueArray;

    const obj = {
      cueArray,
      userId,
    };
    await Cue.UpdateCue(obj);

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.staus(400).json({ success: false, message: error });
  }
}
