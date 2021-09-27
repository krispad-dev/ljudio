import { Cue } from '../models/Cue.js';

export async function getAllFromCue(req, res) {
  try {
    const userId = req.obj.id;

    const cue = await Cue.GetAllFromCue(userId);

    res.status(200).json({ success: true, cue: cue[0].cueSongs });
  } catch (error) {
    res.staus(400).json({ success: false, message: error });
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

    res.status(200).json({ success: true });
  } catch (error) {
    res.staus(400).json({ success: false, message: error });
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

    res.status(200).json({ success: true });
  } catch (error) {
    res.staus(400).json({ success: false, message: error });
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

    res.status(200).json({ success: true });
  } catch (error) {
    res.staus(400).json({ success: false, message: error });
  }
}
