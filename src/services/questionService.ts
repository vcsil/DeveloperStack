import { CreateQuestionData } from "../types/questionTypes";
import questionRepository from "../repositories/questionRepository";

async function insert(createQuestionData: CreateQuestionData) {
  await questionRepository.insert(createQuestionData);
}

async function findById(questionId: number) {
  const question = await questionRepository.findById(questionId);
  if (!question) throw { type: "not_found" };

  return question;
}

async function findAll() {
  return questionRepository.findAll();
}

export default {
  insert,
  findById,
  findAll,
};
