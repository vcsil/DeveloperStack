import { prisma } from "./../config/database";
import { CreateQuestionData } from '../types/questionTypes'

async function insert(createQuestionData: CreateQuestionData) {
  await prisma.question.create({
    data: createQuestionData
  });
}

async function findById(id: number) {
  return prisma.question.findUnique({
    where: { id },
    include: {
      answers: true
    }
  });
}

async function findAll() {
  return prisma.question.findMany()
}

export default {
  insert,
  findById,
  findAll
};