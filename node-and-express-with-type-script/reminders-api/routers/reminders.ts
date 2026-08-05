import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
import Reminder from "../models/reminder";

const router = Router();
const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.json(reminders);
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).json(reminder);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isFinite(id)) {
    return res.status(400).json({ message: "Invalid reminder ID" });
  }

  const reminder = reminders.find((item) => item.id === id);

  if (!reminder) {
    return res.status(404).json({ message: "Reminder not found" });
  }

  const { title, isComplete } = req.body as Partial<
    Pick<Reminder, "title" | "isComplete">
  >;

  if (title !== undefined) reminder.title = title;
  if (isComplete !== undefined) reminder.isComplete = isComplete;

  return res.json(reminder);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isFinite(id)) {
    return res.status(400).json({ message: "Invalid reminder ID" });
  }

  const reminderIndex = reminders.findIndex((item) => item.id === id);

  if (reminderIndex === -1) {
    return res.status(404).json({ message: "Reminder not found" });
  }

  reminders.splice(reminderIndex, 1);
  return res.status(204).send();
});

export default router;
