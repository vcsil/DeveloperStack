import { prisma } from "./../config/database";
import { CreateAnswerData } from '../types/answerTypes'

async function findById(questionId: number) {
  return prisma.answer.findUnique({
    where: { id: questionId },
  });
}

async function insert(createAnswerData: CreateAnswerData) {
  await prisma.answer.create({
    data: createAnswerData,
  });
}

export default {
  findById,
  insert
};