import answerRepository from "./../repositories/answerRepository";
import { CreateAnswerData } from "../types/answerTypes"

async function insert(createAnswerData: CreateAnswerData) {
  await answerRepository.insert(createAnswerData);
}

export default {
  insert
};
